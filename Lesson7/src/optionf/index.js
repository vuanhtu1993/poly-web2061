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

function $(element) {
    const elements = document.querySelectorAll(element);
    return elements.length == 1 ? elements[0] : elements;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function filterDuplicate(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const reRender = async function(element, component) {
    if (element) {
        $(element).innerHTML = await component.render()
    }
    if (component.afterRender) {
        component.afterRender()
    }
}
export {
    priceline,
    cost,
    $,
    numberWithCommas,
    filterDuplicate,
    reRender
}