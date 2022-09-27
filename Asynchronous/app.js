// api get image
function getImageCallback(url, cb) {
    fetch(url).then(function(res) {
        cb(res)
    })
}

function renderImage(selector, value) {
    document.querySelector(selector).src = value
}

// renderImage('#image1', "./images/test.jpeg")

getImageCallback('https://picsum.photos/400/300', function(res) {
    // Anonymous function
    console.log(res, 'ressssssssssss');
    renderImage("#image1", res.url)
})

// Thực hiện getImage2 => Sau khi ảnh 1 được load xong thì ảnh 2 mới được load