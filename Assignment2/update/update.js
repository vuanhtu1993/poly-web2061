// Declaraion
var nameEl = document.querySelector('#name')
var decriptionEl = document.querySelector('#description')

function getDishByID(id) {
    return fetch('http://localhost:3000/dishes/' + id).then(function (res) {
        return res.json()
    })
}

function main() {
    var queryString = location.search
    var param = new URLSearchParams(queryString)
    var id = param.get('id')
    if (id) {
        getDishByID(id).then(function (result) {
            console.log(result);
            nameEl.value = result.name
            decriptionEl.value = result.description
        })
    }
}

main()