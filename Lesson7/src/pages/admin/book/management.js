import { apiGet, apiPut } from "../../../api";

const ManagementBook = {
    render: async function(param) {
        const id = param.data.id
        const book = await apiGet(`/books/${id}`)
        console.log(JSON.stringify(book))

        return /*html*/`
            <div class="container mx-auto">
                <h2 class="text-2xl text-primary-dark mt-5">Admin/Book Detail</h2>
                <div class="flex space-x-4">
                    <form class="w-1/2 flex-none">
                        <div class="flex flex-col">
                            <label class="font-bold">Tên sản phẩm:</label>
                            <input id="book-update-name" class="px-2 py-3 border border-gray-300 rounded-xl" placeholder="Tên sản phẩm" value="${book.name}">
                        </div>
                        <div class="flex mt-4 items-center space-x-4">
                            <label class="font-bold">Ẩn sản phẩm:</label>
                            <input id="book-update-hidden" class="h-5 w-5" type="checkbox" ${book.isHidden ? "checked" : ""}>
                        </div>
                        <button id="book-update-btn" class="text-white mt-4 px-3 py-2 bg-primary rounded-xl">Cập nhật sản phẩm</button>
                    </form>
                    <div class="grid grid-cols-3 gap-3 grow">
                    ${book.images.map(function(image) {
                        return /*html*/`<img src="${image.base_url}">`
                    }).join('')}
                    </div>
                </div>
            </div>
        `
    },
    afterRender: async function(param) {
        const id = param.data.id
        const newData = await apiGet(`/books/${id}`)
        const buttonElement = document.querySelector('#book-update-btn')
        const nameElement = document.querySelector('#book-update-name')
        const hiddenElement = document.querySelector('#book-update-hidden')
        buttonElement.addEventListener('click', function(e) {
            e.preventDefault()
            // Assign new value
            newData.name = nameElement.value
            newData.isHidden = hiddenElement.checked

            apiPut(`/books/${id}`, newData)
            .then(res => alert('Cập nhật dữ liệu thành công'))
            .catch(err => console.log(err))
        })
    }
}

export default ManagementBook;