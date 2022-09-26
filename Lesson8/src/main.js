import Navigo from 'navigo'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'

import '../style.css'

const router = new Navigo('/', {linksSelector: "a"})
router.on({
  "/": function(params) {
    print(Home, params)
  },
  "lien-he": function() {
    console.log('Lien he')
  },
  "gioi-thieu": function() {
    console.log('Gioi thieu')
  }
})
router.resolve()

async function print(component, params) {
  document.querySelector('#header').innerHTML = Header.render(params)
  document.querySelector('#app').innerHTML = await component.render(params)
  document.querySelector('#footer').innerHTML = Footer.render(params)
}
