// Import / Export
import {localStorageService} from './service.js'
import {uploadImage} from './api.js'

// Declaration - Khai báo
var form = document.querySelector("#form")
var image = document.querySelector("#image")
var preview_image = document.querySelector("#preview-image")
var table = document.querySelector("#table")

// Validate - Done
var fields = ["name", "price", "amount", "description", "type"]
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
    // Lấy đường dẫn ảnh
    if(preview_image.src) {
        data['image'] = preview_image.src
    }
    if(!error) {
        var menu = localStorageService.get('menu')
        if(menu) {
            // Thêm vào menu
            menu.push(data)
        } else {
            menu = [data]
        }
        localStorageService.set('menu', menu)
        alert('Thêm sản phẩm thành công')
    }
    form.reset()
    render()
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
        // Promise
        var result = uploadImage('https://image-uploader-anhhtus.herokuapp.com/api/upload', reader.result)
        result.then(function(res) {
            preview_image.src = res.secure_url
        })
    }
}

// In ra man hinh
function render() {
    var content = ""
    var menu = localStorageService.get('menu')
    // Duyệt mảng: For/For in/Foreach
    if (menu) {
        menu.forEach(function(item, index) {
            // Template string
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.amount}</td>
                    <td>${item.type}</td>
                    <td>${item.amount > 1 ? `<input type="checkbox"/>` : `<input type="checkbox" checked/>`}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xoá</button>
                    </td>
                </tr>
            `
        })
        // In ra table
        table.innerHTML = content
    }
}

render()