// Service
// Declaration - Khai báo
var form = document.querySelector("#form")
var image = document.querySelector("#image")
var name = document.querySelector("#name")
var amount = document.querySelector("#amount")
var price = document.querySelector("#price")
var type = document.querySelector("#type")
var description = document.querySelector("#description")

// Validate - Done
var fields = ["name", "price", "amount", "description"]
form.onsubmit = function(e) {
    e.preventDefault()
    fields.forEach(function(item) {
        clearError(item)
    })
    fields.forEach(function(item) {
        var field = document.querySelector("#" + item)
        if(field.value === "") {
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