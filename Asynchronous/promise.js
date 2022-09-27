// Promise

var promise = new Promise(function(resolve, reject) {
    var result = false
    setTimeout(function() {
        if(result) {
            resolve("Load data successfully!!!")
        } else {
            reject("Load data fail!!!")
        }
    }, 5000)
})
console.log(promise, "promise");
promise.then(function(response) {
    console.log(response, "response");
})