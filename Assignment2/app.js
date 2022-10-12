// Declartion
var table = document.querySelector('#table')

function getDish() {
    return fetch('http://localhost:3000/dish')
    .then(function(res) {
        return res.json()
    })
}

getDish().then(function(result) {
    console.log(result, "result");
    render(result)
})

function render(data) {
    var content = ""
    if(data) {
        data.forEach(function(dish, index) {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${dish.name}</td>
                    <td>${dish.price}</td>
                    <td>chưa có</td>
                    <td>${dish.categories}</td>
                    <td>Còn hàng</td>
                    <td>Sửa/Xoá</td>
                </tr>
            `
        });
    }
    table.innerHTML = content
}