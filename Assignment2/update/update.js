function getDishByID(id) {
    return fetch('http://localhost:3000/dishes/' + id).then(function (res) {
        return res.json()
    })
}

function main() {
    // Query string
    var queryString = location.search
    var param = new URLSearchParams(queryString)
    var id = param.get('id')
    console.log(id, "id-------");
    getDishByID(id).then(function (result) {
        console.log(result, "result");
    })
}

main()