// 1 số hàm bất dồng bộ setTimeout, fetch

// Get image
var getImage = function() {
    return fetch('https://picsum.photos/400/300')
}

var getImageCallback = function(url, cb) {
    fetch(url)
    .then(res => cb(res))
}

// Function
function renderImage(id, value) {
    var temp = document.querySelector(id)
    temp.src = value
}

getImageCallback("https://picsum.photos/1000/600", function(res) {
    renderImage("#image1", res.url)
})

getImageCallback("https://picsum.photos/300/200", function(res) {
    renderImage("#image2", res.url)
})


