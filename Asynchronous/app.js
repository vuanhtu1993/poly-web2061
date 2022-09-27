// Fetch image
function fetchImage(url, cb) {
    fetch(url).then(function(response) {
        console.log(response, "response");
        // Callback
        cb(response)
    })
}

// fetchImage()

// Render image
function renderImage(seclector, value) {
    document.querySelector(seclector).src = value
}

// Callback - Cách xử lý bất đồng bộ đầu tiên trong Js
fetchImage("https://picsum.photos/400/300", function(res) {
    renderImage("#image1", res.url)
})

// Khi ảnh 1 được load xong ảnh 2 mới đc load
// Viết code tiếp ở bên dưới