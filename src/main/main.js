import "./main.scss"

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

const main = document.createElement("main");
let products = document.createElement("div");
products.className = "products";
main.appendChild(products);

let src = "https://cwpeng.github.io/live-records-samples/data/products.json"
// The fetch() method is used to send the requests to the server without refreshing the page
/* basic syntax:
fetch(url, {options}).then((respons) => {
  return respons.json(); //取的資料後將資料傳給下一個 then
}).then((data) => {
  ...
}).catch((error) => { // 當初出現錯誤時跑 catch
  console.log(error);
})
 */

// why not use jOuery ajax or Promises??
fetch(src, ).then((response) => {
    return response.json();
}).then((data) => {
    for (let i = 0; i < data.length; i++) {
        let item = document.createElement("div");
        item.className = "product";
        item.textContent = data[i].name;
        products.appendChild(item);
    }
});


export default main;