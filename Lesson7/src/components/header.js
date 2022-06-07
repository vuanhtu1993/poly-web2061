const Header = {
    render: function() {
        return /*html*/ `
        <div class="flex flex-row mx-auto items-center mb-5">
           
           <div class="basis-1/4">   
            <div class="flex justify-center pl-10">
                <a href="/"> 
                    <img class="w-16 md:w-16 h-10 mx-3 my-3" src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="logo">
                    <img class="w-16 h-4" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654611888/Rectangle_imnxxt.svg">
                </a>
                   
             </div>
             </div> 
           
           <form class="    w-full" id="sreach"> 
                <div class="basis-1/2"> 
                <input class="w-4/5 py-1 rounded" type="text">
                <p class="">new</p>
                </div>    
                <button class="bg-[#0D5CB6] rounded py-1 px-3 text-[#fff] inline-flex ">
                <img class=" inline-flex items-center w-5 h-5"src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654615168/Rectangle_ilo9og.png">
                    Tìm kiếm
                </button>  
             </div>
           </form>
            <ul class="flex basis-1/4">
                <li><a class="block px-4 hover:text-red-400" href="/">Trang chủ</a></li>
                <li><a class="block px-4 hover:text-red-400" href="/admin/books">admin</a></a></li>
                <li><a class="block px-4 hover:text-red-400" href="/ve-chung-toi">Về chúng tôi</a></li>
            </ul>
      </div>
        `
    }
}

export default Header