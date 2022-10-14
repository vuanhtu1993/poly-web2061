// Lấy dữ liệu
fetch('http://localhost:3000/dishes').then(function(response) {
    // Promise => khi mà trong then có return => sinh một promise mới
    return response.json()
}).then(function(result) {
    console.log(result, "result");
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

document.querySelector('#btn').onclick = function() {
    var data = {
        name: "Phở bò",
        price: "40000",
    } //FORM
    postDish(data)
    alert('Them moi thanh cong')
}