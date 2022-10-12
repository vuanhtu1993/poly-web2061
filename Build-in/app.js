var array = [
"Vũ Ngọc Bình",
"Nguyễn Nhật Minh",
"Nguyễn Duy Hoàng",
"Bùi Tuấn Vũ",
"Trần Khánh Linh",
"Phạm Minh Đức",
"Nguyễn Tuấn Vinh",
"Trương Quốc Lập",
"Nguyễn Nhật Đức",
"Hoàng Minh Tuấn",
"Lương Ngọc Lâm",
"Hà Thị Bích Diệp",
"Cù Chính Thành",
"Hoàng Quang Huy",
"Nguyễn Hữu Dương",
"Đinh Văn Thu",
"Lê Huy Hoàng",
"Phạm Quang Tú",
"Nguyễn Trí Thành",
"Chu Văn Hậu",
"Vũ Mạnh Tuấn",
"Trần Văn Sang",
"Vũ Tuấn Hải",
"Nguyễn Đức Tuấn",
"Nguyễn Bạch Nhật",
"Đinh Đức Hải",
"Vũ Đình Trình",
"Trần Việt Hùng",
"Đinh Trung Nguyên",
"Hồ Hoài Nam",
"Phạm Tuấn Minh",
"Lê Mạnh Quân",
"Hoàng Quốc Khánh",
"Nguyễn Đình Oanh",
"Đỗ Thành Đạt",
"Đào Huy Tuấn Anh",
]

var list = document.querySelector('#list')
function render(data) {
    var content = ""
    // Foreach không trả lại mảng mới
    data.forEach(function(item) {
        content += `
            <li>${item}</li>
        `
    })
    list.innerHTML = content
}

render(array)

function timkiemtheoho() {
    // Filter trả lại một mảng mới
    var newArray = array.filter(function(item) {
        var first_name = item.split(" ")[0]
        if(first_name == "Nguyễn") {
            return true
        } else {
            return false
        }
    })
    console.log(newArray);
    render(newArray)
}

timkiemtheoho()