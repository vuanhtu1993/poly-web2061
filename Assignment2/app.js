// Declaration
var table = document.querySelector('#table')

function getDishes() {
    return fetch("http://localhost:3000/dishes").then(function (res) {
        return res.json()
    })
}

getDishes().then(function (result) {
    console.log(result, "result");
    render(result)
})

function render(data) {
    var content = ""
    if (data) {
        data.forEach(function (dish, index) {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${dish.name}</td>
                    <td>${dish.description}</td>
                </tr>
            `
        });
    }
    table.innerHTML = content
}