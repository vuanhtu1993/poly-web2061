// Declartion
var form = document.querySelector('#form')
var nameEl = document.querySelector('#name')
var priceEl = document.querySelector('#price')
var amountEl = document.querySelector('#amount')


function createDish(data) {
    return fetch('http://localhost:3000/dish', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(function (res) {
        return res.json()
    })
}

form.onsubmit = function (e) {
    e.preventDefault()
    var name = nameEl.value
    var price = priceEl.value
    var amount = amountEl.value
    var data = { name, price, amount }
    // Tạo mới món ăn
    createDish(data).then(function (result) {
        location.href = "index.html"
    })
}