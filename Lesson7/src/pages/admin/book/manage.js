import { apiGet } from "../../api"
import { priceline } from "../../api"
import { cost } from "../../api"
const adBookDetail = {
    render: async function(param) {
        const book = await apiGet(`/books/${param.data.id}`)
        console.log(book)
        return /*html*/ `
            <div class="flex py-14 max-h-full bg-white">
            <div class="m-auto px-3 py-5">
            <img src="${book.image}" alt="">
            </div>
                
                <div class="flex basis-8/12 px-2 py-2 border-l-2">
                <div class="">
                    <h6 class="text-xs px-3">${book.short_description}</h6>
                    <div class="text-2xl font-light px-3 py-3">${
                      book.title
                    }</div>                   
                    <div class="text-4xl font-semibold bg-[#f5eeee] rounded pl-5 py-5">${
                      book.sale_off
                    }
                     <span class="underline text-[#ff424e]">đ</span>
                     <span class="line-through text-gray-400 text-base">${priceline(
                       book.sale_off,
                       book.price
                     )}</span>
                     <span class="rounded border-2 bg-white text-sm">
                     ${cost((100-((book.sale_off/book.price)*100)).toFixed())}
                     </span>
                     </div>
                </div>
                </div>           
            </div>
             <div class="mt-5 bg-white px-3 py-3">
                        <h2 class="text-xl font-semibold py-3">Thông tin chi tiết</h2>
               <table class="table-auto">
                 <tbody>

                        <tr>
                            <td class="bg-[#efefef] px-4 py-4 ">Công ty phát hành</td>
                            <td class="px-4">${book.publisher}</td>
                        </tr>
                        <tr>
                             <td class="bg-[#efefef] px-4 py-4">Nhà xuất bản</td>
                            <td class="px-4">${book.publisher}</td>
                        </tr>
                        <tr >
                             <td class="bg-[#efefef] px-4 py-4">Loại sách</td>
                            <td class="px-4">${book.categories}</td>
                        </tr>

                 </tbody>
              </table>
             </div>
             <div class="mt-5 bg-white px-3 py-3">
             <h1 class="text-xl font-semibold py-3">Mô Tả Sản Phẩm</h1>
             <div class="">
             ${book.description}
             </div>
             </div>

        `;
    }
}

export default adBookDetail