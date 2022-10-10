// Import / Export
import {localStorageService} from './service.js'
import {uploadImage} from './api.js'

// Declaration - Khai báo
var form = document.querySelector("#form")
var image = document.querySelector("#image")
var preview_image = document.querySelector("#preview-image")

// Validate - Done
var fields = ["name", "price", "amount", "description", "image", "type"]
form.onsubmit = function(e) {
    var error = false
    var data = {}
    e.preventDefault()
    fields.forEach(function(item) {
        clearError(item)
    })
    fields.forEach(function(item) {
        var field = document.querySelector("#" + item)
        if(field.value == "") {
            showError(item, "Trường dữ liệu bắt buộc")
            error = true
        }
        data[item] = field.value
    })
    if(preview_image.src) {
        data["image"] = preview_image.src
    }
    console.log(error, "ERROR", data, "data");
    if(!error) {
        var menu = localStorageService.get('menu');
        if(menu) {
            menu.push(data);
        } else {
            menu = [data]
        }
        localStorageService.set('menu', menu)
        alert('Thêm mới thành công')
        resetForm()
    }
}

function showError(id, content) {
    var element = document.querySelector("#" + id)
    if(element.nextElementSibling) {
        element.nextElementSibling.innerHTML = content
    }
}

function clearError(id) {
    var element = document.querySelector("#" + id)
    if(element.nextElementSibling) {
        element.nextElementSibling.innerHTML = ""
    }
}

function resetForm() {
    form.reset()
    preview_image.src = ""
}

// Handle image
// url: https://image-uploader-anhhtus.herokuapp.com/api/upload
image.onchange = function(e) {
    var file = e.target.files[0]
    var reader = new FileReader();
    // Asynchronous IO
    reader.readAsDataURL(file)
    reader.onloadend = function() {
        var result = uploadImage('https://image-uploader-anhhtus.herokuapp.com/api/upload', reader.result)
        result.then(function(res) {
            preview_image.src = res.secure_url
        })
    }
}