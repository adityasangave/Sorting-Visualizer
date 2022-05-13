let sorting_container = document.querySelector(".sorting-container")

let bars_count = document.getElementById("bar-count")
let sorting_speed = document.getElementById("sorting-speed")

let bubble_sort = document.getElementById("bubble-sort");
let insertion_sort = document.getElementById("insertion-sort")
let selection_sort = document.getElementById("selection-sort")

bars_count.addEventListener("change", function () {
    sorting_container.innerHTML = ''
    let no_of_bars = 0
    no_of_bars = Math.abs(no_of_bars - count_bar())

    let bar_size_array = Array.from({ length: no_of_bars }, () => Math.floor(Math.random() * (300 - 100 + 1) + 100));
    console.log(bar_size_array.length)

    bar_size_array.forEach(function (height, index) {
        let node_bar = document.createElement("div")
        node_bar.setAttribute("class", "bar")
        node_bar.setAttribute("id", `bar-${index}`)
        node_bar.style = `width: 25px;
                            background-color: purple;
                            height: ${height}px;
                            margin: 0px 5px 10px 5px;
                            transition : 0.3s all ease`

        sorting_container.appendChild(node_bar)
    })
})

function sort_speed() {
    let speed = sorting_speed.value
    return speed
}

function count_bar() {
    return bars_count.options[bars_count.selectedIndex].text
}

function get_child_nodes() {
    let child_nodes = sorting_container.childNodes
    return child_nodes
}

bubble_sort.addEventListener("click", async () => {
    let speed = sort_speed()
    let child_nodes = get_child_nodes()

    for (let i = 0; i < child_nodes.length; i++) {
        for (let j = i + 1; j < child_nodes.length; j++) {
            child_nodes[i].style.backgroundColor = `blue`
            child_nodes[j].style.backgroundColor = `green`

            if (child_nodes[i].clientHeight > child_nodes[j].clientHeight) {
                let temp;
                // child_nodes[j].parentElement.insertBefore(child_nodes[j], child_nodes[i])
                temp = child_nodes[i].style.height;
                child_nodes[i].style.height = child_nodes[j].style.height;
                child_nodes[j].style.height = temp;
            }
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
            child_nodes[i].style.backgroundColor = `purple`
            child_nodes[j].style.backgroundColor = `purple`
        }
    }
})

insertion_sort.addEventListener("click", async () => {
    let speed = sort_speed()
    let child_nodes = get_child_nodes()
    let curr_child_node, temp;
    for (let i = 1; i < child_nodes.length; i++) {
        curr_child_node = child_nodes[i].clientHeight
        j = i - 1;
        while (j >= 0 && child_nodes[j].clientHeight > curr_child_node) {
            child_nodes[i].style.backgroundColor = `blue`
            child_nodes[j].style.backgroundColor = `green`
            temp = child_nodes[j].style.height
            child_nodes[j].style.height = child_nodes[j + 1].style.height
            child_nodes[j + 1].style.height = temp
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
            child_nodes[i].style.backgroundColor = `purple`
            child_nodes[j].style.backgroundColor = `purple`
            j--;
        }
        child_nodes[j + 1] = curr_child_node
    }
})

selection_sort.addEventListener('click', async () => {
    let speed = sort_speed()
    let child_nodes = get_child_nodes()
    let i, j;
    for (i = 0; i < child_nodes.length; i++) {
        child_nodes[i].style.backgroundColor = `blue`
        min = i
        for (j = i + 1; j < child_nodes.length; j++) {
            child_nodes[j].style.backgroundColor = `green`
            if (child_nodes[j].clientHeight < child_nodes[min].clientHeight) {
                min = j
            }
        }
        temp = child_nodes[i].style.height
        child_nodes[i].style.height = child_nodes[min].style.height
        child_nodes[min].style.height = temp

        child_nodes[min].style.backgroundColor = `purple`

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
        child_nodes[i].style.backgroundColor = `purple`
    }
})