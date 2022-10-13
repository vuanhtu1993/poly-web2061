// Declaration
var form = document.querySelector('#form')
var nameEl = document.querySelector('#name')
var descriptionEl = document.querySelector('#description')

function postDish(data) {
    return fetch('http://localhost:3000/dishes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(function(res) {
        return res.json()
    })
}

form.onsubmit = function(e) {
    e.preventDefault()
    var name = nameEl.value
    var description = descriptionEl.value
    console.log(name,description, "data" );
    var data = {name, description}
    postDish(data).then(function() {
        location.href = "../index.html"
    })
}

