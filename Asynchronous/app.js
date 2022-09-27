// api get image
function getImageCallback(url, cb) {
    fetch(url).then(function (res) {
        cb(res)
    })
}

function renderImage(selector, value) {
    document.querySelector(selector).src = value
}

// renderImage('#image1', "./images/test.jpeg")

// getImageCallback('https://picsum.photos/1000/700', function(res) {
//     // Anonymous function
//     console.log(res, 'ressssssssssss');
//     renderImage("#image1", res.url)
// })

// Thực hiện getImage2 => Sau khi ảnh 1 được load xong thì ảnh 2 mới được load


// Nested callback
getImageCallback('https://picsum.photos/1000/700', function (res) {
    renderImage("#image1", res.url)
    getImageCallback("https://picsum.photos/300/200", function (res) {
        renderImage("#image2", res.url)
        getImageCallback("https://picsum.photos/300/200", function (res) {
            renderImage("#image3", res.url)
            getImageCallback("https://picsum.photos/300/200", function (res) {
                renderImage("#image4", res.url)
            })
        })
    })
    // Callback hell
})