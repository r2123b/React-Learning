import x from "./lib.js";
import { y, dic, Point } from "./lib.js";
// or 
// import x, { y } from "./lib.js"
console.log("Hello:", x, y);
console.log("Function result: ", dic.add(100));

let p = new Point(1, 2)
console.log("Class definition: ", p)