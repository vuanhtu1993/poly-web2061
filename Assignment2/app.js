function getDishes() {
    return fetch('http://localhost:3000/dishes').then(function (res) {
        return res.json()
    })
}
// Biến dữ liệu món ăn
var dishes = []
// Lấy dữ liệu món ăn
getDishes().then(function (result) {
    dishes = result
    render(result)
})

function render(data) {
    var content = ""
    if (data) {
        data.forEach(function (item, index) {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td><a class="hover:text-red-400" href="./update/update.html?id=${item.id}">${item.name}</a></td>
                    <td>${item.description}</td>
                </tr>
            `
        })
    }
    document.querySelector('#table').innerHTML = content
}

// Searching
// Bước 1: Lấy dữ liệu từ ô input 
var search_input = document.querySelector('#search-input')
var search_btn = document.querySelector('#search-btn')
search_btn.onclick = function() {
    console.log(search_input.value, "search_input");
    // Lọc - filter
    // Bước 2: Lọc dữ liệu từ mảng dữ liệu dishes
    var searched = dishes.filter(function(dish) {
        if(dish.name.includes(search_input.value)) {
            return true
        } else {
            return false
        }
    })
    // Bước 3: In ra màn hình (render)
    render(searched)
}

