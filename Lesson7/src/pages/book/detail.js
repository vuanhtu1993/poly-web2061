import { apiGet } from "../../api"
import { priceline } from "../../optionf"
import { cost } from "../../optionf"
const BookDetail = {
        render: async function(param) {
                const user = await apiGet(`/users/1`)
                const book = await apiGet(`/books/${param.data.id}`)
                const categoriesname = book.categories.name
                const samebook = await apiGet(`/books/?categories.name=${categoriesname}`)
                console.log(samebook)
                const specifications = book.specifications[0].attributes
                return /*html*/ `
            <div class="flex py-14 max-h-full bg-white">
            <div class="m-auto basis-5/12 px-3 py-5">
            <img src="${book.images[0].base_url}" alt="">
            <div class="grid grid-cols-7 gap-5">
            ${book.images.map(function (img){
              return /*html*/`
              <a href=""><img src="${img.thumbnail_url}"></a>
              `
            }).join('')}                  
            </div>
            </div>
                <div class="flex basis-7/12 px-2 py-2 border-l-2">
                <div class="">
                    <h6 class="text-sm px-3">Tác giả: <a  class="text-[#6d9ae2]"href="#">${book.authors?.[0]?.name}</a></h6>
                    <div class="text-2xl font-semibold px-3 py-3">${
                      book.name
                    }</div>    
                    
            <div class="flex"> 
            <p class="inline-flex items-center pb-3">
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png">
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654623095/Group_1_kload5.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654623095/Group_1_kload5.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654623095/Group_1_kload5.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654623095/Group_1_kload5.png">      
                <a class="px-3" href=""> xem 0 đánh giá </a> 
                <div class="">| Đã bán 0</div>
             <p>
             </div>
                    <div class="flex">
                    <div class="basis-3/5" >
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

                     <div class="boxgiamgia py-1 my-3 border-t-2">
                     <p class="font-semibold py-1">lấy đâu ra mã giảm giá??</p>
                     <div class="flex">
                        <button class="border border-blue-500 rounded px-1 py-1 text-blue-500 mx-1"><p>Giảm 1 cái nịt</p> </button>

                        <button class="border border-blue-500 rounded px-1 py-1 text-blue-500 mx-1"><p>Giảm 2 cái nịt</p> </button>

                        <button class="border border-blue-500 rounded px-1 py-1 text-blue-500 mx-1"><p>Giảm 3 cái nịt</p> </button>

                       <a href=""> <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654711823/Rectangle_9_gbzawf.png"> </a>
                     </div>
                     </div>

                     <div class="boxdiachi flex my-1 border-t-2 py-2">
                     <p class="font-semibold pr-2 ">Giao đến ${user.address} </p>
                      <a class="text-blue-600 font-semibold" href="">Đổi địa chỉ</p>
                     </div>


                     <div class="2 cai tikinow flex">
                        <div class="basis-3/6 border-2 rounded-lg px-4 py-1 mr-1">
                        <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654712554/Rectangle_10_d90e6e.png">
                        <p class=" text-[#00AB56]">Trước 18:00 hôm nay</p>
                        <p class=" text-[#000]">10 tỏi đ</p>
                        </div>
                        <div class="basis-3/6 border-2 rounded-lg px-4 py-1">
                        <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654712554/Rectangle_10_d90e6e.png">
                        <p class=" text-[#00AB56]">Trước 18:00 hôm nay</p>
                        <p class=" text-[#000]">10 tỏi đ</p>
                        </div>                     
                     </div>
                        
               <div class="day la cai so luong va addtocard"> 
                     <p class="font-medium text-base leading-4 text-gray-600 pt-5 ">Số lượng</p>
                      <div class="flex pt-5">
                        <span class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">-</span>
                          <input id="counter" aria-label="input" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" type="text" value="1" />
                        <span class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1">+</span>
                      </div>
                      <div>
                        <button class="focus:outline-none focus:ring-2 rounded hover:bg-red-700 focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-[#FF3945] w-64 py-4 lg:mt-10 dark:bg-white dark:text-red-700 dark:hover:bg-red-700"  id="btnAddToCart">Chọn mua</button>
                      </div>
                </div>

                      </div>

                      <div class="container basis-2/5 py-2 pl-5">   
                      <div class="">   
                      <div class="flex">
                          <div class="w-12 h-12"><img class="pt-1" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654706488/Rectangle_2_fg7y88.png" alt="logo"></div>
                            <div>Tiki Trading
                            <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654707488/Rectangle_3_pr8aka.png">
                            </div>
                            </div>
                      <div class="flex py-3"> 
                        <div class="basis-3/6 pl-6"> <p class="font-semibold text-lg"> 4.6 / 5 </p> <span>4,7tr+<span></div>
                        <div class="basis-3/6 pl-6"><p class="font-semibold text-lg"> 408k+</p><span>theo dõi<span></div>
                      </div>
                      


                      <div class="flex">
                          <a class="basis-3/6 text-blue-600" href=""> <button class="border flex border-blue-500 rounded p-2"> <img class="px-1 pt-0.5" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654708598/Rectangle_4_p4i2nv.png"> Xem shop</button></a>
                          <a class="basis-3/6 text-blue-600" href=""> <button class="ml-2 border flex border-blue-500 rounded p-2"> <img class="px-1 pt-0.5" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654708598/Rectangle_5_cjgqjr.png"> Theo dõi</button></a>
                      </div>
                        

                      <div class="flex my-3 pt-1 border-t-2">
                           <div class="basis-2/6 items-center">
                                <div class="">
                                <img class="pl-4" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654709453/Rectangle_6_vvak86.png">
                                <span class="font-semibold ">Hoàn tiền 1 tỏi nếu hàng thật :v</span>
                                </div>
                           </div>
                           <div class="basis-2/6 items-center px-2">
                                <div class="">
                                <img class="pl-4" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654709451/Rectangle_7_cd7ca9.png">
                                <span class="font-semibold ">Không cho kiểm tra hàng</span>
                                </div>
                           </div><div class="basis-2/6 items-center px-2">
                           <div class="">
                           <img class="pl-4" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654709450/Rectangle_8_wwhkhy.png">
                           <span class="font-semibold ">Mở rồi khỏi đổi trả</span>
                           </div>
                           </div>
                      </div>
                      </div>
                      </div>
                      </div> 
                      </div>
                       
                    
                </div>
                </div>                       
                <h4>Sản Phẩm Tương Tự</h4>      
                        <div class="sanphamtuongtu grid gap-x-2 gap-y-1 grid-cols-8">
                                                       
                        
                        ${samebook.map(function(book){
                          return /*html*/`
                          <div class="px-7 py-3 hover:shadow-md"> 
                          <a href="/books/${book.id}">
                          <div ><img class="" src="${book.images[0].thumbnail_url}" alt="img"></div>
                          
                          <p class="py-2 text-left text-xs">${book.name}</p>
                          <p id="isseller" class="font-bold text-left">${book.current_seller.price} 
                             <span class="underline">đ</span>
                                  <span class="text-[#ff424e]" >  
                                  ${cost((100-((book.current_seller.price/book.original_price)*100)).toFixed())}
                                  </span></p>
                      </a>
                      </div>
                      `
                        }).join('')}
                           
                         
                                          
                        </div>
                        
                        </div>

             <div class="mt-5 bg-white px-3 py-3">
                        <h2 class="text-xl font-semibold py-3">Thông tin chi tiết</h2>
               <table class="table-auto">
                 <tbody>

                 ${specifications.map(function (spec) {
              return`
                  <tr>
                  <td class="bg-[#efefef] px-4 py-4 ">${spec.name}</td>
                  <td class="px-4">${spec.value}</td>
                  
              </tr>`
                 }).join('')
                 }

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