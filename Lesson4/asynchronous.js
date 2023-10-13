// Code bat dong

// console.log("Cong viec 2");

// Xử lý code bất đồng bộ
// 1. Callback
// 2. Promise - ES6
// 3. Async/Await - ES7

function asyncDoSomeThing(congviec) {
    const rdm = Math.random() < 0.5
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(congviec)
            // console.log("Cong viec 1");
        }, 1000)
    })
}

// const cv1 = asyncDoSomeThing("Hoàn thành công việc 1")
// const cv2 = asyncDoSomeThing("Hoàn thành công việc 2")
// const cv3 = asyncDoSomeThing("Hoàn thành công việc 3")

// cv1.then(function(result) {
//     console.log(result);
//     return cv2
// }).then(function(result) {
//     console.log(result);
//     return cv3
// }).then(function(result) {
//     console.log(result);
//     console.log("Hoàn thành công việc 4");
// })

function showImage(url) {
    const image = document.createElement('img')
    image.src = url
    document.body.appendChild(image)
}

fetch("https://picsum.photos/200/300")
.then(function(result) {
    // console.log(result);
    showImage(result.url)
    return fetch("https://picsum.photos/400/600")
}).then(function(result) {
    showImage(result.url)
})