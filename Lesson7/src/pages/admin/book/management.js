import { apiGet, apiPut } from "../../../api";

const ManagementBook = {
    render: async function(param) {
        const book = await apiGet(`/books/${param.data.id}`)
        console.log(book)
        return /*html*/`
            <div class="container mx-auto">
                <h2 class="text-2xl text-primary-dark mt-5">Admin/Book Detail</h2>
                <div class="flex space-x-4">
                    <div class="flex-none w-1/3">
                        <div class="flex flex-col">
                            <label class="font-bold">Tên sản phẩm:</label>
                            <input class="w-full px-3 py-2 border border-primary" value="${book.name}">
                        </div>
                        <button class="bg-primary py-3 px-2 mt-8" id="book-management-update">Cập nhật sản phẩm</button>
                    </div>
                    <div class="grow grid grid-cols-3 gap-4">
                        ${book.images.map(function(image) {
                            return /*html*/`<img src="${image.base_url}">`
                        }).join('')}
                    </div>
                </div>
            </div>
        `
    },
    afterRender: function() {
        const updateBtn = document.querySelector('#book-management-update')

        updateBtn.addEventListener('click', function() {
            console.log("Dang update day")
        })
    }
}

export default ManagementBook;