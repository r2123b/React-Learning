import "./welcome.css"

/* 舊版的：

in "index.html":
<div class="welcome">
    歡迎光臨
</div>


let welcome = document.querySelector(".welcome");
let flip = true;
welcome.addEventListener("click", function () {
    if (flip)
        welcome.textContent = "很高興見到你";
    else
        welcome.textContent = "再次見到你了";
    flip = !flip;
})
*/

let welcome = document.createElement("div");
welcome.className = "welcome";
welcome.textContent = "歡迎光臨";
let flip = true;
welcome.addEventListener("click", function () {
    if (flip)
        welcome.textContent = "很高興見到你";
    else
        welcome.textContent = "再次見到你了";
    flip = !flip;
});

// document.body.appendChild(welcome); -> 這會影響到 index.html <body> 的排版
// 所以用底下取代

export default welcome;
