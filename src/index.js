import nav from "./nav/nav.js"
import welcome from "./welcome/welcome.js"
import main from "./main/main.js"

// 也把 .css 交給 webpack 管理 (即把 .css 放在 src folder 裡面)
// 但需要在 "webpack.config.js" 裡面加入 module
import "./index.css"

document.body.appendChild(nav);
document.body.appendChild(welcome);
document.body.appendChild(main);
