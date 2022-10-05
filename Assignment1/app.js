// Import/ Export
import {localStorageService} from './service.js'

// Localstorage
// Localstorage getItem, setItem, removeItem
var menu = [
    {name: "Bún chả", price: 35000, amount: 10},
    {name: "Phở bò", price: 40000, amount: 10},
    {name: "Bún bò", price: 50000, amount: 10},
]

// Lưu vào localstorage
localStorageService.set("menu", menu)

// Lấy dữ liệu từ localstorage ra
var data = localStorageService.get('menu')

// Khai báo
var table = document.querySelector('#table')

var content = ""
data.forEach(function(item, index) {
    // template string
    content += `
    <tr>
        <td>${index}</td>
        <td>${item.name}</td>
        <td>${item.amount}</td>
        <td>${item.price}</td>
    </tr>
    `
});

table.innerHTML = content


// // Declaration - Khai báo
// var form = document.querySelector("#form")
// var image = document.querySelector("#image")

// // Validate - Done
// var elementArray = ["name", "amount", "price", "description"]
// form.onsubmit = function (e) {
//     e.preventDefault()
//     elementArray.forEach(function (item) {
//         clearError(item)
//     })
//     elementArray.forEach(function (item) {
//         var field = document.querySelector("#" + item)
//         if (field.value == "") {
//             showError(item, "Trường dữ liệu bắt buộc")
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