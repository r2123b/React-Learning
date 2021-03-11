import "./main.scss"
import React from "react"

/*
<main>
    <div class="products"></div>
</main>


// https://cwpeng.github.io/live-records-samples/data/products.json
let src = "https://cwpeng.github.io/live-records-samples/data/products.json"
// ajax
fetch(src).then((response) => {
    return response.json();
}).then((data) => {
    let products = document.querySelector(".products");
    for (let i = 0; i < data.length; i++) {
        let item = document.createElement("div");
        item.className = "product";
        item.textContent = data[i].name;
        products.appendChild(item);
    }
});
*/

let products = React.createElement("div", { className: "products" }, null);
let main = React.createElement("main", {}, products);


// add listener in React: https://stackoverflow.com/a/36181732/3755348
let src = "https://cwpeng.github.io/live-records-samples/data/products.json"
fetch(src,).then((response) => {
    return response.json();
}).then((data) => {
    let myproducts = document.querySelector(".products");
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let item = document.createElement("div");
        item.className = "product";
        item.textContent = data[i].name;
        myproducts.appendChild(item);
    }
});

export default main;