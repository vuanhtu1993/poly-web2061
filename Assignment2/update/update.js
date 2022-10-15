function getDishByID(id) {
    return fetch('http://localhost:3000/dishes/' + id).then(function (res) {
        return res.json()
    })
}

// IIFE
// Intermediate invoke function expression

function main() {
    var queryString = location.search
    var param = new URLSearchParams(queryString)
    var id = param.get('id')
    // console.log(id, "id-------");
    getDishByID(id).then(function (result) {
        console.log(result);
    })
}

main()