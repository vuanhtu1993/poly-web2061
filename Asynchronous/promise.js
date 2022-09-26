// 1 số hàm bất dồng bộ setTimeout, fetch

var getImagePromise = function(url) {
    // Promise
    return fetch(url)
}

// Function
function renderImage(id, value) {
    var temp = document.querySelector(id)
    temp.src = value
}

// Render image
getImagePromise('https://picsum.photos/1000/600')
.then(res => renderImage('#image1', res.url))
// Promise chain
.then(() => getImagePromise('https://picsum.photos/400/300'))
.then(res => renderImage('#image2', res.url))
.then(res => console.log(res, '=========='))