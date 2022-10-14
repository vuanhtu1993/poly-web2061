// Declaration
var nameEl = document.querySelector('#name')
var priceEl = document.querySelector('#price')
var amountEl = document.querySelector('#amount')
var categoriesEl = document.querySelector('#categories')
var descriptionEl = document.querySelector('#description')

function getDishByID(id) {
    return fetch('http://localhost:3000/dish/' + id)
        .then(function (res) {
            return res.json()
        })
}

function main() {
    var queryString = location.search
    var param = new URLSearchParams(queryString)
    var id = param.get('id')
    if (id) {
        getDishByID(id).then(function (result) {
            nameEl.value = result.name
            priceEl.value = result.price
            amountEl.value = result.amount
        })
    }
}
main()