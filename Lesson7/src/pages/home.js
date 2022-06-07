import { apiGet } from '../api'
import { cost } from '../optionf'
const Home = {
        render: async function() {
                const data = await apiGet('/books');
                // console.log(data)
                if (!data) return;
                // console.log(data[4].current_seller.price)
                return /*html*/ `
        <div class="flex">
            <div class="basis-2/12">
            <div class="grid grap-1 grid-cols-1 px-3 py-3"> 
            <h4>DANH MỤC SẢN PHẨM</h4>
            <a class="py-2" href="">English Books</a>
            <a class="py-2" href="">Sách tiếng Việt</a>
            <a class="py-2" href="">Văn phòng phẩm</a> 
            <a class="py-2" href="">Quà lưu niệm</a> 
        
            </div>
            
            </div>
            <div class="basis-10/12">    
            <div class="pt-5"> 
            <h2 class="text-xl pb-3">Nhà sách tiki</h2>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/60/0c/44/11771d2ece938d92769724ffd3866c17.png.webp" alt="banner" />
            </div>       
             <div class="btn flex basis-full">
                <button class="btn px-3 py-3 hover:rounded-lg" data-id="All">All</button>
                <button class="btn px-3 py-3 hover:rounded-lg" data-id="Tâm lý học">Tâm lý học</button>
                <button class="btn px-3 py-3 hover:rounded-lg" data-id="Sách tiếng việt">Sách tiếng việt</button> 
                <button class="btn px-3 py-3 hover:rounded-lg" data-id="Sách anh ngữ">Sách anh ngữ</button>
                <button class="btn px-3 py-3 hover:rounded-lg" data-id="Sách EQ">Sách EQ</button>
                <button class="btn px-3 py-3 hover:rounded-lg" data-id="Văn Phòng Phẩm">Văn Phòng Phẩm</button>
                <button class="btn px-3 py-3 hover:rounded-lg" data-id="Máy tính bỏ túi">Máy tính bỏ túi</button>
             </div>
                <div class="grid grid-cols-4 gap-4">
                    ${data.map(function (item,id) {
                        return/*html*/`       
                         
                    <div class="px-7 py-3 border-2 hover:shadow-md"> 
                        <a href="/books/${item.id}">
                            <div class=""><img src="${item.images[0].thumbnail_url}" alt="img"></div>
                            
                            <p class="py-2 text-left text-xs">${item.name}</p>
                            <p id="isseller" class="font-bold text-left">${item.current_seller.price} 
                               <span class="underline">đ</span>
                                    <span class="text-[#ff424e]" >  
                                    ${cost((100-((item.current_seller.price/item.original_price)*100)).toFixed())}
                                    </span></p>
                        </a>
                     </div>
             `
         } ).join('')}                                  
                </div>
            </div>
        </div>  
        `
    },
    
    afterRender: async function() {

       // console.log(document.querySelectorAll("#isseller"))
        

        // let data = await apiGet('/books');
        // console.log(data)
    
    }
    
}


export default Home