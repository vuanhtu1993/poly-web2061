// Localstorage
// Bộ nhớ của browser
// Mỗi một application bộ nhớ là 5Mb
// No expired
// Có 3 method: getItem, setItem, removeItem

// Import/Export
// Tiết kiệm tài nguyên
// Không gây ra lỗi không mong muốn
// Có 2 cách để export là {} và default


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