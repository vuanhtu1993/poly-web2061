import Navigo from 'navigo'
import '../main.css'
import AboutPage from './pages/about'
import HomePage from './pages/home'

document.querySelector('#nav').innerHTML = /*html*/`
    <ul class="flex space-x-4">
      <li><a data-navigo class="block py-4 text-red-300 hover:text-red-400" href="/">Home page</a></li>
      <li><a data-navigo class="block py-4 text-red-300 hover:text-red-400" href="/about">About page</a></li>
    </ul>
    `

document.querySelector('#app').innerHTML = /*html*/`
  <h1 class="">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

const print = (content) => {
  document.querySelector('#app').innerHTML = content.render();
}

const router = new Navigo("/", {linksSelector: "a"})
// Router declaration
router.on({
  "/": () => print(HomePage),
  "about": () => print(AboutPage)
})
// Router activate
router.resolve();