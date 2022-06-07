import { apiGet, apiPut } from "../../../api";

const ManagementBook = {
    render: async function(param) {
        const data = await apiGet(`/books/${param.data.id}`)
        console.log(data, '======data======')
        return /*html*/`
            <div class="container mx-auto">
                <h2 class="text-2xl text-primary-dark mt-5">Admin/Book Detail</h2>
                <div class="grid grid-cols-2 mt-3">
                    <form class="w-full max-w-lg" >
                        <div class="w-full"
                            <label class="font-bold">Tên sản phẩm</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="bookDetail-name" 
                            type="text" 
                            placeholder="Jane"
                            value="${data.name}"
                            >
                        </div>
                        <div class="w-full mt-3">
                            <label class="font-bold">Mô tả ngắn</label>
                            <textarea class="block w-full border rounded py-3 px-4 mb-3" 
                            id="bookDetail-shortDescription" 
                            cols="50"
                            rows="5"
                            type="text">${data.short_description}</textarea>
                        </div>
                        <div>
                            <label class="font-bold">Mô tả dài</label>
                            <textarea
                            id="bookDetail-description" 
                            rows="10"
                            class="block w-full border"
                            >
                                ${data.description}
                            </textarea>
                        </div>
                        <div class="mt-3">
                            <label class="font-bold">Ẩn sản phẩm</label>
                            <input id="bookDetail-isHidden" type="checkbox" ${data.isHidden ? 'checked' : ""}>
                        </div>
                        <button id="bookDetail-submit" class="bg-primary-dark py-2 px-4 text-white rounded-md">Sửa</button>
                    </form>
                    <div class="flex space-x-4 items-start">
                        ${data.images.map(i => `<img class="w-1/4" src="${i.base_url}" alt="image">`)}
                    </div>
                </div>
            </div>
        `
    },
    afterRender: async function(param) {
        // Get id
        const id = param.data.id
        // Lấy các Element cần thiết
        const submitBtn = document.querySelector('#bookDetail-submit')
        const name = document.querySelector('#bookDetail-name')
        const shortDescription = document.querySelector('#bookDetail-shortDescription')
        const description = document.querySelector('#bookDetail-description')
        const isHidden = document.querySelector('#bookDetail-isHidden')
        console.log(isHidden.checked, 'isHidden')
        let newData = await apiGet(`/books/${id}`)
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault()
            newData.name = name.value
            newData.short_description = shortDescription.value
            newData.description = description.value
            newData.isHidden = isHidden.checked
            console.log(newData)
            apiPut(`/books/${id}`, newData)
            .then(res => alert('Updated successfully'))
            .catch(err => console.log(err))
        })
    }
}

export default ManagementBook;