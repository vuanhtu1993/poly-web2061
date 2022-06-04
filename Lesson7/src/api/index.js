const server = 'http://localhost:3000'
    // Lấy dữ liệu về
function apiGet(uri) {
    return fetch(server + uri).then(res => res.json())
}
// Lấy dữ liệu về callback
function apiGetCallback(uri, callback) {
    return fetch(server + uri).then(res => res.json()).then(data => callback(data))
}

function getImage(url, callback) {
    return fetch(url).then(data => callback(data))
}

function getImagePromise(url) {
    return fetch(url)
}

function priceline(price1, price2) {
    if (price1 === price2) {
        return ""
    }
    return price2 + "đ"
}

function cost(x) {
    if (x > 0) {
        return "-" + x + "%";
    } else { return "" }
}
//nha san suat +ten neu manufacturer =rong thi  moi in publisher
export {
    apiGet,
    apiGetCallback,
    getImage,
    getImagePromise,
    priceline,
    cost,
}