import '../style.css'
import Header from './components/header'

function render() {
  document.querySelector('#header').innerHTML = Header.render()
  document.querySelector('#app').innerHTML = /*html*/`
    <h1 class="bg-blue-300">Hello Vite!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
  document.querySelector('#footer').innerHTML = "FOOTER"
}

render()