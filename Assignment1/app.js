// Import / Export
import {localStorageService} from './service.js'
import {uploadImage} from './api.js'

// Declaration - Khai báo
var form = document.querySelector("#form")
var image = document.querySelector("#image")
var preview_image = document.querySelector("#preview-image")
var table = document.querySelector("#table")

// Validate - Done
var fields = ["name", "price", "amount", "description", "image", "type"]
// Event
form.onsubmit = function(e) {
    var error = false
    var data = {}
    e.preventDefault()
    fields.forEach(function(item) {
        clearError(item)
    })
    // Validation
    // forEach hàm để duyệt các phần từ trong mảng
    fields.forEach(function(item) {
        // DOM
        var field = document.querySelector("#" + item)
        if(field.value == "") {
            showError(item, "Trường dữ liệu bắt buộc")
            error = true
        }
        data[item] = field.value
    })
    if(!error) {
        if(preview_image.src) {
            data['image'] = preview_image.src
        }
        var menu = localStorageService.get('menu')
        if(menu) {
            // Thêm mới phần tử
            menu.push(data)
        } else {
            menu = [data]
        }
        localStorageService.set('menu', menu)
        form.reset()
        alert('Thêm món ăn thành công')
        render()
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

// Handle image
// url: https://image-uploader-anhhtus.herokuapp.com/api/upload
image.onchange = function(e) {
    var file = e.target.files[0]
    var reader = new FileReader();
    // Asynchronous IO
    reader.readAsDataURL(file)
    reader.onloadend = function() {
        var result = uploadImage('https://image-uploader-anhhtus.herokuapp.com/api/upload', reader.result)
        result.then(function(response) {
            preview_image.src = response.secure_url
        })
    }
}

function render() {
    var content = ""
    var menu = localStorageService.get('menu')
    // Duyệt mảng forEach/For in/For
    if(menu) {
        menu.forEach(function(dishes, index) {
            // Symbol template string
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${dishes.name}</td>
                    <td>${dishes.amount}</td>
                    <td>${dishes.type}</td>
                    <td><input type="checkbox"/></td>
                </tr>
            `
        })
        table.innerHTML = content
    }
}

render()