import "./nav.css"

/* 
<nav>
    <div class="title">我的網站</div>
    <div class="menu">
        <div class="item">選項一</div>
        <div class="item">選項二</div>
        <div class="item">選項三</div>
    </div>
    <div class="menu-trigger">
        <img src="img/menu.png" width="30" height="30" />
    </div>
</nav>


// ".menu" -> why we need '.'??
// You need to remember that '.' represents a class selector
// https://stackoverflow.com/a/17563341/3755348
let menu = document.querySelector(".menu");
let trigger = document.querySelector(".menu-trigger>img");
trigger.addEventListener("click", function () {
    menu.style.display = "flex";
});
*/


const nav = document.createElement("nav");

// create title
let title = document.createElement("div");
title.className = "title";
title.textContent = "我的網站";
nav.appendChild(title);

// create menu
let menu = document.createElement("div");
menu.className = "menu";
for (let i = 0; i < 3; i++) {
    let item = document.createElement("div");
    item.className = "item";
    item.textContent = "標題" + String(i + 1);
    menu.appendChild(item);
}
nav.appendChild(menu);

// create menu-trigger
let generateTrigger = function () {
    let trigger = document.createElement("div");
    trigger.className = "menu-trigger";
    let image = document.createElement("img");
    image.src = "img/menu.png";
    image.width = 30;
    image.height = 30;
    trigger.appendChild(image);
    trigger.addEventListener("click", function () {
        menu.style.display = "flex";
    });
    return trigger;
}
nav.appendChild(generateTrigger());

export default nav;
