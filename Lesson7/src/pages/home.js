import { apiGet } from '../api'
import { cost } from '../api'
const Home = {
        render: async function() {
                let data = await apiGet('/books')
                console.log(data)
                return /*html*/ `
        <div class="flex">
            <div class="basis-2/12">
            <div class="grid grap-1 grid-cols-1"> 
            <h4>DANH MỤC SẢN PHẨM</h4>
            <a href="">Danh mục 1</a>
            <a href="">Danh mục 1</a>
            <a href="">Danh mục 1</a> 
            </div>
               
            </div>
            <div class="basis-10/12">
                <div class="flex basis-full">
                <div class="px-3 py-3 hover:rounded-lg">filter1</div>
                <div class="px-3 py-3 hover:rounded-lg">filter2</div> 
                <div class="px-3 py-3 hover:rounded-lg">filter3</div>
                </div>
                <div class="grid grid-cols-4 gap-4">
                    ${data.map(item => /*html*/`                 
                    <div class="px-7 py-3 border-2 hover:shadow-md"> 
                        <a href="/books/${item.id}">
                            <div class=""><img src="${item.image}" alt=""></div>
                            
                            <p class="py-2 text-left text-xs">${item.title}</p>
                            <p class="font-bold text-left">${item.sale_off} 
                               <span class="underline  text-[#ff424e]">đ</span>
                                    <span>
                                    ${cost((100-((item.sale_off/item.price)*100)).toFixed())}
                                    </span></p>

                        </a>
                     </div>
                    `).join('')}
                </div>
            </div>
        </div>  
        `
    }
}

export default Home