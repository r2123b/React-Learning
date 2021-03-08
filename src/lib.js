let x = 3;
let y = "hello world!!"
let dic = {
    data: 10,
    add: function (value) {
        return this.data + value;
    }
};

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

// 兩種 export 方法
export default x;
export { y, dic, Point };