// Declaration
var form = document.querySelector('#form')// DOM
var nameEl = document.querySelector('#name') // DOM
var descriptionEl = document.querySelector('#description')// DOM


// Thêm mới
function postDish(data) {
    return fetch('http://localhost:3000/dishes', {
        method: "POST", // phuong thuc tao moi RESTFull
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
        // Callback
        location.href = "../index.html"
    })
}

