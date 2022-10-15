// Declaration
var table = document.querySelector('#table')

function getDishes() {
    return fetch("http://localhost:3000/dishes").then(function (res) {
        return res.json()
    })
}

getDishes().then(function (result) {
    render(result)
    afterRender()
})

function render(data) {
    var content = ""
    if (data) {
        data.forEach(function (dish, index) {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td><a class="hover:text-blue-400" href="./update/update.html?id=${dish.id}">${dish.name}</a></td>
                    <td>${dish.description}</td>
                    <td>
                        <div>
                            <button class="update bg-blue-400 mr-2 px-4 py-2" data-id="${dish.id}">Sửa</button>
                            <button class="delete bg-red-400 px-4 py-2" data-id="${dish.id}">Xoá</button>
                        </div>
                    </td>
                </tr>
            `
        });
    }
    table.innerHTML = content
}

function afterRender() {
    var updateBtns = document.querySelectorAll('.update')
    var deleteBtns = document.querySelectorAll('.delete')
    // Them su kien vao ham sua
    updateBtns.forEach(function (btn) {
        btn.onclick = function () {
            console.log("Xoa san pham di", btn.dataset.id);
            // Ham sua sp viet o day
            location.href = `./update/update.html?id=${btn.dataset.id}`
        }
    })
    // Them su kien vao ham xoa
    deleteBtns.forEach(function (btn) {
        btn.onclick = function () {
            console.log("Xoa san pham di", btn.dataset.id);
            // Ham xoa sp viet o day
        }
    })
}