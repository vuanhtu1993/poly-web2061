import Navigo from 'navigo'
// Component
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home';
import {apiGet, apiGetCallback, getImage} from './api'
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

// Asynchronous
console.log("start")
setTimeout(function() {
  console.log("doing some things")
  // console.log("The end")
}, 0)
setTimeout(function() {
  console.log("The end")
}, 1000)

// Get image into img tag
getImage('https://picsum.photos/300/200', function(data) {
  // console.log(data)
  document.querySelector('#img-01').src = data.url
})

getImage('https://picsum.photos/300/200', function(data) {
  // console.log(data)
  document.querySelector('#img-02').src = data.url
})

getImage('https://picsum.photos/300/200', function(data) {
  // console.log(data)
  document.querySelector('#img-03').src = data.url
})