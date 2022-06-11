import Navigo from "navigo";
// Component
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import BookDetail from "./pages/book/detail";
import { apiGet, apiGetCallback, getImage, getImagePromise } from "./api";
// styles
import "../style.css";
import Crawl from "./pages/crawl";
import Admin from "./pages/admin/book";
import ManagementBook from "./pages/admin/book/management";

// Config router
const router = new Navigo("/", { linksSelector: "a" });

router.on({
  "/": function () {
    print(Home);
  },
  "/san-pham": function () {
    console.log("Sản phẩm");
  },
  "/books/:id": function (param) {
    print(BookDetail, param)
  },
  "/crawl/:id": function (param) {
    print(Crawl, param)
  },
  "/admin": function (param) {
    print(Admin, param)
  },
  "/admin/books/:id": function(param) {
    print(ManagementBook, param)
  }
});
router.resolve();
// End config router

async function print(content, param) {
  document.querySelector("#header").innerHTML = Header.render();
  // Nơi page được tạo ra
  document.querySelector("#app").innerHTML = await content.render(param);
  document.querySelector("#footer").innerHTML = Footer.render();
  // Add event vào các thành phần đã được tạo ra
  if(content.afterRender) {
    await content.afterRender(param)
  }
}