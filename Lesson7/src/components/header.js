const Header = {
    render: function() {
        return /*html*/ `
        <div class="container mx-auto flex justify-between items-center mb-5">
            <img class="w-16 md:w-16 h-10 mx-3 my-3" src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="logo">
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