import { apiGet } from "../../../api";

const ManagementBook = {
    render: async function(param) {
        console.log(param, "=======param=======")
        const data = await apiGet(`/books/${param.data.id}`)
        return /*html*/`
            <div class="container mx-auto">
                <h2 class="text-2xl text-primary-dark mt-5">Admin/Book Detail</h2>
                <div class="flex space-x-4 mt-3">
                    <form class="w-full max-w-lg">
                        <div class="w-full">
                            <label>Tên sản phẩm</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="grid-first-name" 
                            type="text" 
                            placeholder="Jane"
                            value="${data.name}"
                            >
                        </div>
                        <div class="w-full mt-3">
                            <label>Mô tả ngắn</label>
                            <textarea class="block w-full border rounded py-3 px-4 mb-3" 
                            id="grid-first-name" 
                            cols="50"
                            rows="5"
                            type="text">${data.short_description}</textarea>
                        </div>
                        <button onclick="windo">Back</button>
                    </form>
                    <div>
                        <img src="" alt="image">
                    </div>
                </div>
                
            </div>
        `
    }
}

export default ManagementBook;