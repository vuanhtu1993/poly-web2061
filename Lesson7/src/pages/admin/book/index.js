import { apiGet } from "../../../api"

const Admin = {
    render: async function() {
        const data = await apiGet('/books')
        return /*html*/`
            <div class="container mx-auto">
                <h3 class="text-2xl text-primary-dark mt-5">Admin/Quản trị danh sách sản phẩm<h3>
                <table class="border w-full">
                    <thead class="bg-primary border-b text-white">
                        <tr>
                            <th class="w-[5%] px-6 py-4 text-left border-r">STT</th>
                            <th class="w-[30%] px-6 py-4 text-left border-r">Tên sp</th>
                            <th class="w-[10%] px-6 py-4 text-left border-r">Giá</th>
                            <th class="w-[40%] py-4 text-left border-r">Ảnh</th>
                            <th class="w-[15%] py-4 text-left border-r">Tác giả</th>
                        </tr>
                    </thead>
                    </tbody>
                        ${data.map(function(book, index) {
                            return /*html*/`
                            <tr class="border-b">
                                <td class="border-r">${index}</td>
                                <td><a class="hover:text-primary" href="/admin/books/${book.id}">${book.name}</a></td>
                                <td>${book.original_price}</td>
                                <td class="flex flex-wrap w-full items-start">${book.images.map(image => `<img class="w-1/3" src="${image.base_url}">`).join('')}</td>
                                <td>${book.authors?.[0].name}</td>
                            </tr>
                            `
                        }).join('')}
                        
                    </tbody>
                </table>
            </div>
        `
    }
}

export default Admin