const sinhvien = {
    name: "Vu Anh Tu",
    age: 29,
    class: "10A",
    nam_nhap_hoc: "1/5/2022",
    gpa: "6.5",
    tinhHocLuc: function() {
        
    },
    tinhThoiGianTotNghiep() {

    }
}

function polygon(name, age, ) {

}

function Stopwatch() {
    this.duration = 0;
    let starTime, endTime, isRunning;
    this.start = function() {
        if (isRunning) {
            throw Error("Stopwatch is started already")
        }
        isRunning = true
        starTime = new Date()
    }

    this.stop = function() {
        if(!isRunning) {
            throw Error("Stopwatch is not started")
        }
        isRunning = false
        endTime = new Date()
        const second = (endTime.getTime() - starTime.getTime())/1000
        this.duration += second
    }

    this.reset = function() {
        this.duration = 0
        starTime = null
        endTime = null
        isRunning = false
    }
}