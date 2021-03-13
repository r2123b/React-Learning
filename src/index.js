import React from "react"
import ReactDOM from "react-dom"

//import nav from "./nav/nav.js"
import Welcome from "./welcome/welcome.js"
import main from "./main/main.js"

// 也把 .css 交給 webpack 管理 (即把 .css 放在 src folder 裡面)
// 但需要在 "webpack.config.js" 裡面加入 module
import "./index.css"

// class name 一定要大寫
let app = <Welcome />;

ReactDOM.render(
    app,
    document.querySelector("#root")
);
