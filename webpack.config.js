const path = require("path");
module.exports = {
    mode: "development", // development or production
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
};
