import { uploadImage } from "./api.js"
import { localStorageService } from "./service.js"

// Declaration - Khai báo
var form = document.querySelector("#form")
var image = document.querySelector("#image")
var preview_image = document.querySelector("#preview-image")
var table = document.querySelector("#table")

// Validate - Done
var fields = ["name", "price", "amount", "description", "image", "type"]
form.onsubmit = function (e) {
    e.preventDefault()
    var error = false
    var data = {}
    fields.forEach(function (item) {
        clearError(item)
    })
    e.preventDefault()
    fields.forEach(function (item) {
        var field = document.querySelector("#" + item)
        if (field.value === "") {
            showError(item, "Trường dữ liệu bắt buộc")
            error = true
        }
        data[item] = field.value
    })

    if (preview_image.src) {
        data['image'] = preview_image.src
    }
    console.log(error, "ERROR");
    console.log(data, "DATA");
    if (!error) {
        var menu = localStorageService.get('menu')
        if (menu) {
            // Thêm sản phẩm
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
    if (element.nextElementSibling) {
        element.nextElementSibling.innerHTML = content
    }
}

function clearError(id) {
    var element = document.querySelector("#" + id)
    if (element.nextElementSibling) {
        element.nextElementSibling.innerHTML = ""
    }
}

// Handle image
// url: https://image-uploader-anhhtus.herokuapp.com/api/upload
image.onchange = function (e) {
    var file = e.target.files[0]
    var reader = new FileReader();
    // Asynchronous IO
    reader.readAsDataURL(file)
    reader.onloadend = function () {
        var result = uploadImage('https://image-uploader-anhhtus.herokuapp.com/api/upload', reader.result)
        result.then(function (res) {
            preview_image.src = res.secure_url
        })
    }
}

function render() {
    var content = ""
    var menu = localStorageService.get('menu')
    // Duyet mang forEach/For in/For
    if (menu) {
        menu.forEach(function (dishes, index) {
            // `` template string
            content += `
            <tr>
                <td>${index + 1}</td>
                <td>${dishes.name}</td>
                <td>${dishes.amount}</td>
                <td>${dishes.type}</td>
                <td><input type="checkbox" ${dishes.amount < 1 ? `checked` : ''}/></td>
            </tr>
        `
        })
        table.innerHTML = content
    }
}

function render() {
    var content = ""
    var menu = localStorageService.get('menu')
    // Duyệt mảng forEach/For in/For
    if (menu) {
        menu.forEach(function (dishes, index) {
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