// Fetch image
function fetchImage(url, cb) {
    fetch(url).then(function (response) {
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
// Nested callback
fetchImage("https://picsum.photos/1000/600", function (res) {
    renderImage("#image1", res.url)
    fetchImage("https://picsum.photos/400/300", function (res) {
        renderImage("#image2", res.url)
        fetchImage("https://picsum.photos/400/300", function (res) {
            renderImage("#image3", res.url)
            fetchImage("https://picsum.photos/400/300", function (res) {
                renderImage("#image4", res.url)
            })
        })
    })
})



// Khi ảnh 1 được load xong ảnh 2 mới đc load
// Viết code tiếp ở bên dưới