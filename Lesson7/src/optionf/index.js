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
    priceline,
    cost,
}