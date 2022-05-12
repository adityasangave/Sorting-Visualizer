let sorting_container = document.querySelector(".sorting-container")
let bubble_sort = document.getElementById("bubble-sort");

window.onload = function () {
    let bar_size_array = Array.from({ length: 5 }, () => Math.floor(Math.random() * (300 - 100 + 1) + 100));
    console.log(bar_size_array)

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
}

bubble_sort.addEventListener("click", async () => {
    console.log("bUBBLE SORT CLKCED");
    let child_nodes = sorting_container.childNodes
    console.log(child_nodes[1].clientHeight)
    for (let i = 1; i < child_nodes.length; i++) {
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
                }, 1000)
            );
            child_nodes[i].style.backgroundColor = `purple`
            child_nodes[j].style.backgroundColor = `purple`
        }
    }
})