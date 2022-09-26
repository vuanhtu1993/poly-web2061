const server = 'http://localhost:4000'
// Lấy dữ liệu về
function apiGet(uri) {
    return fetch(server + uri).then(res => res.json())
}

function apiPost(uri, data) {
    return fetch(server + uri, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
}

function apiPut(uri, data) {
    return fetch(server + uri, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
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

function apiCrawl(url) {
    return fetch(url).then(res => res.json())
}


export {
    apiGet,
    apiPost,
    apiPut,
    apiGetCallback,
    getImage,
    getImagePromise,
    apiCrawl
}