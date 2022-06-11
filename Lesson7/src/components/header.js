import { $, reRender } from "../optionf"
import Home from "../pages/home"
const Header = {
    render: function() {
        return /*html*/ `
        <div class="container flex flex-row mx-auto items-center">
           <div class="basis-1/4">   
            <div class="flex justify-center pl-10">
                <a href=""> 
                    <img class="w-16 md:w-16 h-10 mx-3 my-3" src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="logo">
                    <img class="w-16 h-4" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654611888/Rectangle_imnxxt.svg">
                </a>
                   
             </div>
             </div> 
           
           <form class="w-2/4 pt-8"> 

                <div class="flex"> 
                <input id="inputSreach" class="search w-4/5 py-1 rounded" type="text">
                <div class="inline-flex"> 
                 <button class="btnsreach bg-[#0D5CB6] rounded py-1 px-3 text-[#fff]">
                 <img class=" inline-flex items-center w-5 h-5"src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654615168/Rectangle_ilo9og.png">
                    Tìm kiếm
                </button> 
                </div>
                </div>   
                <div class="">
                <a href="#">Harry marquie</a>
                </div>
             
           </form>
            <ul class="flex basis-1/4">
                <li><a class="block px-4 hover:text-red-400 text-white" href="/">Trang chủ</a></li>
                <li><a class="block px-4 hover:text-red-400 text-white" href="/admin/books">admin</a></a></li>
                <li><a class="block px-4 hover:text-red-400 text-white" href="/ve-chung-toi">Đăng nhập / Đăng ký</a></li>
            </ul>          
      </div>
        <div class="bg-[#e4e4f2] h-10 w-auto pl-60 flex items-center text-sm">Trang chủ > Nhà sách tiki <div>
     
        `
    },
    afterRender(){
        const formsreach = $("#inputSreach")
        const btnSreach = $(".btnsreach")
        btnSreach.addEventListener('click', function(e){
                e.preventDefault()
                history.replaceState(null,null,`?search=${formsreach.value}`);
                reRender('#app',Home);
        })
        
    }
}

export default Header