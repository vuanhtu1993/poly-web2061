function getProduct() {
    return Promise.resolve("list san pham")
}

function addProduct() {
    return Promise.resolve("them san pham thanh cong")
}
// export default
// export default getProduct;

export {
    getProduct,
    addProduct
}