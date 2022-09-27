// Promise một đối tượng trong Js để quản lý các tác vụ bất đồng bộ
var promise = new Promise(function(resolve, reject) {
    var status = false
    setTimeout(function() {
        if(status) {
            resolve("Hoàn thành công việc!!!")
        } else {
            reject("Không hoàn thành công việc!!!")
        }
    }, 2000)
})

console.log(promise, "promise======");
promise.then(function(response) {
    console.log(response, "response====");
})