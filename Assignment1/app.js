// Declaration - Khai báo
var form = document.querySelector("#form")
var name = document.querySelector("#name")
var amount = document.querySelector("#amount")
var price = document.querySelector("#price")
var type = document.querySelector("#type")
var image = document.querySelector("#image")
var description = document.querySelector("#description")

var elementArray = ["#name", "#amount", "#price", "#description"]
form.onsubmit = function(e) {
    e.preventDefault()
    elementArray.forEach(function(item) {
        clearError(item)
    })
    elementArray.forEach(function(item) {
        var field = document.querySelector(item)
        if(field.value == "") {
            showError(item, "Trường dữ liệu bắt buộc")
        } 
    })
}

function showError(id, content) {
    var element = document.querySelector(id)
    element.nextElementSibling.innerHTML = content
}

function clearError(id) {
    var element = document.querySelector(id)
    element.nextElementSibling.innerHTML = ""
}