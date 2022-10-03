// Service
import {localStorageService} from './service.js'
// Declaration - Khai báo
var form = document.querySelector("#form")
var name = document.querySelector("#name")
var amount = document.querySelector("#amount")
var price = document.querySelector("#price")
var type = document.querySelector("#type")
var image = document.querySelector("#image")
var preview_image = document.querySelector("#preview-image")
var description = document.querySelector("#description")

// Validate
var elementArray = ["name", "amount", "price", "description"]
form.onsubmit = function (e) {
    e.preventDefault()
    elementArray.forEach(function (item) {
        clearError(item)
    })
    var error = false;
    var data = {}
    elementArray.forEach(function (item) {
        var field = document.querySelector("#" + item)
        if (field.value == "") {
            showError(item, "Trường dữ liệu bắt buộc")
            error = true
        }
        data[item] = field.value
    })
    if (!error) {
        var menu = localStorageService.get('menu')
        if(menu) {
            menu.push(data)
        } else {
            menu = [data]
        }
        localStorageService.set('menu', menu)
        alert("Tạo mới thành công")
        form.reset()
    }
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
image.onchange = function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        var result = uploadImage('https://image-uploader-anhhtus.herokuapp.com/api/upload', reader.result)
        result.then(function(res) {
            preview_image.src = res.secure_url
            console.log(res, "res");
        })
    }
}

// Upload image
function uploadImage(url, base64) {
    return fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: base64})
    }).then((res) => res.json())
}