// ".menu" -> why we need '.'??
// You need to remember that . represents a class selector
// https://stackoverflow.com/a/17563341/3755348
let menu = document.querySelector(".menu");
let trigger = document.querySelector(".menu-trigger>img");
trigger.addEventListener("click", function () {
    menu.style.display = "flex";
});




let welcome = document.querySelector(".welcome");
let flip = true;
welcome.addEventListener("click", function () {
    if (flip)
        welcome.textContent = "很高興見到你";
    else
        welcome.textContent = "再次見到你了";
    flip = !flip;
})



// https://cwpeng.github.io/live-records-samples/data/products.json
let src = "https://cwpeng.github.io/live-records-samples/data/products.json"
// ajax
fetch(src).then((response)=> {
    return response.json();
}).then((data)=> {
    let products = document.querySelector(".products");
    for (let i=0; i<data.length; i++) {
        let item = document.createElement("div");
        item.className = "product";
        item.textContent = data[i].name;
        products.appendChild(item);
    }
});