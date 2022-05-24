import { addProduct, getProduct } from "./api.js"; // destructoring
import { httpGetAsync, getData, getDataCallback } from "./services.js";

function print(tag, content) {
  const element = document.querySelector(tag);
  element.innerHTML = content;
}

function printImage(tag, content) {
  const element = document.querySelector(tag);
  element.src = content;
}

// httpGetAsync('https://picsum.photos/300/200', function(data) {
//     console.log(data.responseURL)
//     document.querySelector("#image_1").src = data.responseURL
// })

// getData('https://picsum.photos/450/300')
// .then(res => printImage("#image_1", res.url))
// .then(() => getData('https://picsum.photos/450/300'))
// .then(res => printImage("#image_2", res.url))

getDataCallback("https://picsum.photos/450/300", function (res) {
  printImage("#image_1", res.url);
  getDataCallback("https://picsum.photos/450/300", function (res) {
    printImage("#image_2", res.url);
    getDataCallback("https://picsum.photos/450/300", function (res) {
      printImage("#image_3", res.url);
    });
  });
});
