let sorting_container = document.getElementsByClassName("sorting-container")

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
                            margin: 0px 5px 10px 5px;`

        sorting_container[0].appendChild(node_bar)
    })
}