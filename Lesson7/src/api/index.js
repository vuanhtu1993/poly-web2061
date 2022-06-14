const server = 'http://localhost:3000'
import axios from 'axios'
import instance from './config'
// Lấy dữ liệu về
function apiGet(uri) {
    return fetch(server + uri).then(res => res.json())
}
// Lấy dữ liệu về callback
function apiGetCallback(uri, callback) {
    return fetch(server + uri).then(res => res.json()).then(data => callback(data))
}

function apiPut(uri, data) {
    return fetch(server + uri, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
} // }).then(res => res.json())

function getImage(url, callback) {
    return fetch(url).then(data => callback(data))
}

function getImagePromise(url) {
    return fetch(url)
}
const remove = (id) => {
    return instance.delete(`/products/${id}`);
};
export {
    apiGet,
    apiGetCallback,
    getImage,
    getImagePromise,
    apiPut,
    remove
}