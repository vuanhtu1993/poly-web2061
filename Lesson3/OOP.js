// OOP Object Oriented Programming
// Mô phỏng các sự vật, sự việc ngoài đời vào lập trình
// Object
// 3 cách tạo object trong js
// 1. Object literature - Đối tượng thuần
const hopGiaoBan = {
    // Thuộc tính (properties)
    name: "Họp giao ban thứ 6 hàng tuần",
    place: "Phòng đào tạo",
    topic: "Triển khai thi cuối block 1 kỳ Fall2023",
    // Phương thức (Method)
    conlude: function() {
        console.log("Đưa ra phương án thi và thời gian thi");
    }
}

// 2. Object functional construction
const hop2 = new Object({
    name: "Họp giao ban thứ 6 hàng tuần",
    place: "Phòng đào tạo",
    topic: "Triển khai thi cuối block 1 kỳ Fall2023",
    // Phương thức (Method)
    conlude: function() {
        console.log("Đưa ra phương án thi và thời gian thi");
    }
})

// 3. Class - es5
const Meeting = function(name, place, topic) {
    this.name = name
    this.place = place
    this.topic = topic
    this.conclude = function(){
        console.log("Đưa ra phương án thi và thời gian thi");
    } 
}

const hop3 = new Meeting("Hop giao ban", "PDT", "Trien khai nganh doc")

// BOM - window

// DOM - document

// FP Function Programming