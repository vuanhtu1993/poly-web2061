import Navigo from "navigo";
// Component
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import BookDetail from "./pages/book/detail";
import { apiGet, apiGetCallback, getImage, getImagePromise, priceline, cost } from "./api";
// styles
import "../style.css";
import admin from "./pages/admin/book";
// Config router
const router = new Navigo("/", { linksSelector: "a" });

router.on({
    "/": function() {
        print(Home);
    },
    "/san-pham": function() {
        console.log("Sản phẩm");
    },
    "/books/:id": function(pram) {
        print(BookDetail, pram)
    },
    "/admin/books": function(pram) {
        print(admin, pram)
    },
    "/admin/books/:id": function(pram) {
        print(adBookDetail, pram)
    }
});
router.resolve();
// End config router

async function print(content, param) {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = await content.render(param);
    document.querySelector("#footer").innerHTML = Footer.render();
}

// Asynchronous
// console.log("start");
// setTimeout(function () {
//   console.log("doing some things");
//   // console.log("The end")
// }, 0);
// setTimeout(function () {
//   console.log("The end");
// }, 1000);

// Callback
// Get image into img tag
// getImage("https://picsum.photos/3000/2000", function (data) {
//   document.querySelector("#img-01").src = data.url;
//   getImage("https://picsum.photos/300/200", function (data) {
//     document.querySelector("#img-02").src = data.url;
//     getImage("https://picsum.photos/300/200", function (data) {
//       document.querySelector("#img-03").src = data.url;
//     });
//   });
// });

// Promise
// getImagePromise('https://picsum.photos/3000/2000')
// .then(data => document.querySelector("#img-01").src = data.url)
// .then(() => getImagePromise('https://picsum.photos/300/200'))
// .then(data => document.querySelector("#img-02").src = data.url)
// .then(() => getImagePromise('https://picsum.photos/300/200'))
// .then(data => document.querySelector("#img-03").src = data.url)

// Async Await
// const data1 = await getImagePromise('https://picsum.photos/3000/2000')
// document.querySelector("#img-01").src = data1.url
// const data2 = await getImagePromise('https://picsum.photos/3000/2000')
// document.querySelector("#img-02").src = data2.url
// const data3 = await getImagePromise('https://picsum.photos/3000/2000')
// document.querySelector("#img-03").src = data3.url