// Service
import {localStorageService} from './service.js'
import {uploadImage} from './api.js'

// Declaration - Khai báo
var form = document.querySelector("#form")
var image = document.querySelector("#image")

// Validate - Done
var elementArray = ["name", "amount", "price", "description"]
form.onsubmit = function (e) {
    e.preventDefault()
    elementArray.forEach(function (item) {
        clearError(item)
    })
    elementArray.forEach(function (item) {
        var field = document.querySelector("#" + item)
        if (field.value == "") {
            showError(item, "Trường dữ liệu bắt buộc")
        }
    })
}

function showError(id, content) {
    var element = document.querySelector("#" + id)
    element.nextElementSibling.innerHTML = content
}

function clearError(id) {
    var element = document.querySelector("#" + id)
    element.nextElementSibling.innerHTML = ""
}

// Handle image
image.onchange = function(e) {
    var file = e.target.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = function() {

    }
}