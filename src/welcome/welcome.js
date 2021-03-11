import "./welcome.css"
import React from "react"

/* version 1：

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

/* version 2
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
*/


// version 3
// React.createElement("標籤名稱", 屬性, sub-components);
// this is to create "React element" not "HTML element"
// React can lead to an error, "Node.appendChild must be an instance of Node"

let flip = true;
let welcome = React.createElement(
    "div",
    {
        className: "welcome",
        style: {
            color: "red",
            fontWeight: "bold"
        },
        onClick: function () {
            if (flip)
                document.querySelector(".welcome").textContent = "很高興見到你";
            else
                document.querySelector(".welcome").textContent = "再次見到你了";
            flip = !flip;
        }
    },
    "歡迎光臨"
);

// document.body.appendChild(welcome); -> 這會影響到 index.html <body> 的排版
// 所以用底下取代
export default welcome;



/* version 4: React return HTML tags
<div class="welcome">
    歡迎光臨
</div>
*/
/*
class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // JSX(React 自創的)
        // Babel can convert the following code into JS - TBC on 3/13
        return <div clss="welcome">
            歡迎光臨
        </div>;
    }
}
export default Welcome;  // export a class
*/