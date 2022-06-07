import { apiGet } from "../../api"
import { priceline } from "../../optionf"
import { cost } from "../../optionf"
const BookDetail = {
        render: async function(param) {
                const book = await apiGet(`/books/${param.data.id}`)
                    //console.log(book.specifications[0].attributes[0].value)
                const atributes = book.specifications[0].attributes
                    //console.log(atributes)
                return /*html*/ `
            <div class="flex py-14 max-h-full bg-white">
            <div class="m-auto px-3 py-5">
            <img src="${book.images[0].base_url}" alt="">
            <div class="grid grid-cols-7 gap-5">
            ${book.images.map(function (img){
              return /*html*/`
              <a href=""><img src="${img.thumbnail_url}"></a>
              `
            })}
                       
            </div>
            </div>
                
                <div class="flex basis-8/12 px-2 py-2 border-l-2">
                <div class="">
                    <h6 class="text-sm px-3">Tác giả: <a  class="text-[#6d9ae2]"href="#">${book.authors?.[0]?.name}</a></h6>
                    <div class="text-2xl font-light px-3 py-3">${
                      book.name
                    }</div>                   
                    <div class="text-4xl font-semibold bg-[#f5eeee] rounded pl-5 py-5">${
                      book.current_seller.price
                    }
                     <span class="underline">đ</span>
                     <span class="line-through text-gray-400 text-base">${priceline(
                       book.sale_off,
                       book.price
                     )}</span>
                     <span class="rounded border-2 bg-red-500 text-sm">
                     ${cost((100-((book.current_seller.price/book.original_price)*100)).toFixed())}
                     </span>
                     </div>
                     <p class="font-medium text-base leading-4 text-gray-600 pt-5 ">Số lượng</p>
                      <div class="flex pt-5">
                        <span class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">-</span>
                          <input id="counter" aria-label="input" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" type="text" value="1" />
                        <span class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1">+</span>
                      </div>
                      <div>
                        <button class="focus:outline-none focus:ring-2 hover:bg-red-700 focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-red-500 w-60 py-5 lg:mt-10 dark:bg-white dark:text-red-700 dark:hover:bg-red-700"  id="btnAddToCart">Chọn mua</button>
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
                            <td class="px-4">${atributes[0]?.value}</td>
                        </tr>
                        <tr>
                             <td class="bg-[#efefef] px-4 py-4">Nhà xuất bản</td>
                            <td class="px-4">${atributes[1]?.value}</td>
                        </tr>
                        <tr >
                             <td class="bg-[#efefef] px-4 py-4">Dịch Giả</td>
                            <td class="px-4">${atributes[2]?.value}</td>
                        </tr>
                        <tr >
                             <td class="bg-[#efefef] px-4 py-4">Loại bìa</td>
                            <td class="px-4">${atributes[3]?.value}</td>
                        </tr>
                        <tr >
                             <td class="bg-[#efefef] px-4 py-4">Số trang</td>
                            <td class="px-4">${atributes[4]?.value}</td>
                        </tr>
                        <tr >
                             <td class="bg-[#efefef] px-4 py-4">Nhà xuất bản</td>
                            <td class="px-4">${atributes[5]?.value}</td>
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

export default BookDetail