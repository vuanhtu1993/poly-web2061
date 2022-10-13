function getDishes() {
    return fetch('http://localhost:3000/dishes').then(function(res) {
        return res.json()
    })
}

// lấy món ăn
getDishes().then(function(result) {
    console.log(result);
    render(result)
})

function render(data) {
    var content = ""
    if(data) {
        data.forEach(function(item, index) {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                </tr>
            `
        })
    }
    document.querySelector('#table').innerHTML = content
}