import Navigo from 'navigo'
// Component
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home';
import {apiGet, apiGetCallback} from './api'
// styles
import '../style.css'

// Config router
const router = new Navigo('/', {linksSelector: "a"});

router.on({
  "/": function() {
    print(Home.render())
  },
  "/san-pham": function() {
    console.log('Sản phẩm')
  },
})
router.resolve()
// End config router

function print(content) {
  document.querySelector('#header').innerHTML = Header.render()
  document.querySelector('#app').innerHTML = content
  document.querySelector('#footer').innerHTML = Footer.render();
}

apiGet('/books').then(data => console.log(data))