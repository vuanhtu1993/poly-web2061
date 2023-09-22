// 3 cach de tao function trong javascript
const PI = 3.1412
// function keyword
// function perimeter(d) {
//     return PI * d
// }

// Anonymous function
// const perimeter = function (d) {
//     return PI * d
// }

// Array function
const perimeter = (d) => {
    return PI * d
}

// console.log(perimeter(10));

// Callback
const myClass = ["Do Anh Quan", "Dinh Minh Tu", "Nguyen Tien Viet"]

// const infor = myClass.map(function (sv) {
//     return sv + "-" + "WD18203"
// })

// console.log(infor);
const wd18203_map = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]); 
        console.log(callback(arr[i]));
    }
}

wd18203_map(myClass, function (sv) {
    return sv + "-" + "WD18203"
})