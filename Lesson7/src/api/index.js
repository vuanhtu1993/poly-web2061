const server = 'http://localhost:3000'

function apiGet(uri) {
    return fetch(server + uri).then(res => res.json())
}

function apiGetCallback(uri, callback) {
    return fetch(server + uri).then(res => res.json()).then(data => callback(data))
}

function getImage(url, callback) {
    return fetch(url).then(data => callback(data))
}

function getImagePromise(url) {
    return fetch(url)
}


export {
    apiGet,
    apiGetCallback,
    getImage,
    getImagePromise
}