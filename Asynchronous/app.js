function getDishes() {
    return fetch('http://localhost:3000/dishes')
        .then(function (response) {
            return response.json()
        })
}

getDishes().then(function(result) {
    console.log(result, "Du lieu mon an");
    // --- Viet ham render o day ---
})

// Tạo mới dữ liệu

function postDish(data) {
    fetch('http://localhost:3000/dishes', {
        method: "POST", // Tạo mới
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

document.querySelector('#btn').onclick = function () {
    var data = {
        name: "Phở bò",
        price: "40000",
    } //FORM
    postDish(data)
    alert('Them moi thanh cong')
}