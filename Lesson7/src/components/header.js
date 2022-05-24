const Header = {
    render: function() {
        return /*html*/`
        <div class="container mx-auto flex justify-between items-center mb-5">
            <img class="w-12 md:w-28" src="../../assets/logo.png" alt="logo">
            <ul class="flex">
                <li><a class="block px-4 hover:text-red-400" href="/">Trang chủ</a></li>
                <li><a class="block px-4 hover:text-red-400" href="/san-pham">Sản phẩm</a></a></li>
                <li><a class="block px-4 hover:text-red-400" href="/ve-chung-toi">Về chúng tôi</a></li>
            </ul>
      </div>
        `
    }
}

export default Header