import { apiGet } from '../api'
import { $, cost, filterDuplicate, numberWithCommas, reRender } from '../optionf'
import Header from '../components/header';
const Home = {
        render: async function() {
                let data = await apiGet('/books');
                //console.log(data)
                //let arr = []
                // data.map(function(index) {
                //     var categories = index.categories.name
                //     arr.push(categories)
                // })
                //let duplicate = filterDuplicate(arr)

                const paramUrl = new URLSearchParams(location.search)
                const search = paramUrl.get('search')
                if (search) {
                    data = await apiGet(`/books?categories.name=${search}`)
                    data = await apiGet(`/books?q=${search}`)
                } else {
                    data = await apiGet('/books');
                }
                if (!data) return;
                let categories = data.map(i => i.categories?.name)
                categories = categories.filter(function(item, pos) {
                    return categories.indexOf(item) == pos;
                })
                //console.log(categories)
                // console.log(data[4].current_seller.price)
                return /*html*/ `
        <div class="flex">
            <div class="basis-2/12">

            <div class="grid grap-1 grid-cols-1 px-3 py-3  border border-b-gray-200 flex-start"> 
            <h4 class="font-semibold text-base">DANH MỤC SẢN PHẨM</h4>
            <a class="dm py-2" data-id="Sách tiếng Việt" >Sách tiếng Việt</a>
            <a class="dm py-2" data-id="Sách tư duy - Kỹ năng sống " >Sách tư duy - Kỹ năng sống</a>
            <a class="dm py-2" data-id="Sách doanh nhân" >Sách doanh nhân</a> 
            <a class="dm py-2" data-id="Sách kỹ năng làm việc ">Sách kỹ năng làm việc </a>    
            <a class="dm py-2" data-id="Truyện ngắn - Tản văn - Tạp Văn" >Truyện ngắn - Tản văn - Tạp Văn</a>    
            <a class="dm py-2" data-id="Tác phẩm kinh điển" >Tác phẩm kinh điển</a>  
            <a class="dm py-2" data-id="English Books" >English Books</a>  
            <a class="dm py-2" data-id="Grammar, vocabulary & skills" >Grammar, vocabulary & skills</a>  
            <a class="dm py-2" data-id="Fiction - Literature"> Fiction - Literature </a>  
            </div>

            <div class="grid grap-1 grid-cols-1 px-3 py-3  border border-b-gray-200"> 
            <h4 class="font-semibold text-base">ĐỊA CHỈ NHẬN HÀNG</h4>
            <a class="py-2 font-medium" href="">Sao hỏa</a>
            <a class="py-2 italic text-[#0D5CB6]" href="">Đổi địa chỉ</a>
            </div>
            <div class="grid grap-1 grid-cols-1 px-3 py-3  border border-b-gray-200"> 

            <h4 class="font-semibold text-base pb-3">DỊCH VỤ</h4>
            <form id="checkservice">
            <input  type="checkbox" id="tiki">
            <label for="tiki">Giao siêu tốc 2H</label><br>
            <input type="checkbox" id="freeship">
            <label for="freeship">Không giới hạn</label><br>
            <input type="checkbox" id="hoantien">
            <label for="hoantien">Rẻ hơn hoàn tiền</label><br>
            <input type="checkbox" id="tragop">
            <label for="tragop">Trả góp 0%</label><br>
            </form>
            </div>

            <div class="grid grap-1 grid-cols-1 px-3 py-3  border border-b-gray-200"> 
            <h4 class="font-semibold text-base pb-3">NƠI BÁN</h4>
            <form id="local">
            <input  type="checkbox" id="hanoi">
            <label for="hanoi">Hà Nội</label><br>
            <input type="checkbox" id="hcm">
            <label for="hcm">Hồ Chí Minh</label><br>
            <input type="checkbox" id="danang">
            <label for="danang">Đà Nẵng</label><br>
            <input type="checkbox" id="thainguyen">
            <label for="thainguyen">Thái Nguyên</label><br>
            <input type="checkbox" id="binhduong">
            <label for="binhduong">Bình Dương</label><br>
            </form>
            </div>

            <div class="grid grap-1 grid-cols-1 px-3 py-3  border border-b-gray-200"> 
            <h4 class="font-semibold text-base">ĐÁNH GIÁ</h4>
            <div class="ratinglist">
            <a href=""> 
            <div class="flex"> 
            <p class="inline-flex items-center">
                <img class="" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png">
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png"> 
                
                <p class="pl-2">từ 5 sao</p>
             <p>
             </div>
            </a>
            <a href=""> 
            <div class="flex"> 
            <p class="inline-flex items-center">
                <img class="" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png">
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654623095/Group_1_kload5.png"> 
                
                <p class="pl-2">từ 4 sao</p>
             <p>
             </div>
            </a>
            <a href=""> 
            <div class="flex"> 
            <p class="inline-flex items-center">
                <img class="" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png">
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654622433/Group_jnwlou.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654623095/Group_1_kload5.png"> 
                <img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654623095/Group_1_kload5.png"> 
                
                <p class="pl-2">từ 3 sao</p>
             <p>
             </div>
            </a>
            </div>
            </div>
            
            </div>
            <div class="basis-10/12">    
            <div class="pt-5"> 
            <h2 class="text-xl pl-3 pb-3">Nhà sách tiki</h2>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/60/0c/44/11771d2ece938d92769724ffd3866c17.png.webp" alt="banner" />
            </div>       
            
               

                    ${categories.map(function (item,i) 
                        {                           
                        const books = data.filter(i => i.categories.name == item)
                        
                       return /*html*/`
                            <div class="tendanhmuc py-2 px-2 font-bold text-xl">${item}</div>   
                            <div class="grid grid-cols-4 gap-4">
                                ${books.map(function(book){
                                    return/*html*/`                       
                                    <div class="px-7 py-3 border border-collapse hover:shadow-md ${book.hidden==true?"hidden":""}"> 
                                    
                                        <a href="/books/${(book.id)}">
                                            <div ><img class="" src="${book.images[0].thumbnail_url}" alt="img"></div>
                                            
                                            <p class="py-2 text-left text-xs">${book.name}</p>
                                            <p id="isseller" class="font-bold text-left">${
                                                numberWithCommas(book.current_seller.price)
                                    
                                            } 
                                               <span class="underline">đ</span>
                                                    <span class="text-[#ff424e]" >  
                                                    ${cost((100-((book.current_seller.price/book.original_price)*100)).toFixed())}
                                                    </span></p>
                                        </a>
                                     </div>
                                    `
                            }).join('')}     
                            </div>   
                       `
                                
                         } 
                         ).join('')}                                  
                
            </div>
        </div>  
        `
    },

    afterRender: function() {

        const categories = $(".dm") //[0].dataset.id

        for (let cate of categories) {
            cate.addEventListener('click', async function(e) {
                const catename = (cate.dataset.id)
                    // console.log(typeof catename)
                //const newdata = )
                //console.log(newdata)
                history.replaceState(null, null, `?search=${catename}`);
                reRender('#app', Home)
            })

        }


        // let data = await apiGet('/books');
        // console.log(data)

    }

}


export default Home