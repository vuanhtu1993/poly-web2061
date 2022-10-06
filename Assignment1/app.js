// Import / Export
import {localStorageService} from './service.js'

// Localstorage
// getItem, setItem, removeItem
var menu = [
    {name: "Phở bò", price: 40000, amount: 10},
    {name: "Bún chả", price: 40000, amount: 10},
]
// localStorage.setItem("menu", JSON.stringify(menu))
// console.log(localStorage.getItem("menu"), "menu====");

localStorageService.set("menu", menu)
console.log(localStorageService.get('menu'));

// // Declaration - Khai báo
// var form = document.querySelector("#form")
// var image = document.querySelector("#image")

// // Validate - Done
// var fields = ["name", "price", "amount", "description"]
// form.onsubmit = function(e) {
//     e.preventDefault()
//     fields.forEach(function(item) {
//         var field = document.querySelector("#" + item)
//         if(field.value === "") {
//             showError(item, "Required")
//         }
//     })
// }

// function showError(id, content) {
//     var element = document.querySelector("#" + id)
//     element.nextElementSibling.innerHTML = content
// }

// function clearError(id) {
//     var element = document.querySelector("#" + id)
//     element.nextElementSibling.innerHTML = ""
// }

// // Handle image
// // url: https://image-uploader-anhhtus.herokuapp.com/api/upload
// image.onchange = function(e) {
//     var file = e.target.files[0]
//     var reader = new FileReader();
//     reader.readAsDataURL(file)
//     reader.onloadend = function() {
//     }
// }