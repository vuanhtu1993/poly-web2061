const Header = {
  render: function () {
    return /*html*/ `
        <section class="w-full bg-primary">
        <div class="flex justify-between items-center py-4 container mx-auto">
            <div>
            <a href="/">
                <img class="max-w-[70px]" src="/public/images/logo.svg" alt="Logo" />
            </a>
            </div>

            <div class="w-full flex justify-center items-center">
            <label class="relative flex max-w-[746px] w-[100%] justify-end">
                <input
                class="max-w-[626px] placeholder:italic placeholder:text-sm outline-none block bg-white w-full py-3 pl-9 pr-3 shadow-sm sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
                />
                <span
                class="bg-bg-search px-5 flex content-center items-center text-[#fff] cursor-pointer hover:bg-opacity-80 border-2 border-bg-search"
                >Search</span
                >
            </label>
            </div>

            <div class="flex max-w-[250px] w-full justify-between">
            <div class="flex items-center">
                <div>
                <img
                    class="max-w-[30px] mr-3 text-[#fff]"
                    src="/public/images/user.png"
                    alt=""
                />
                </div>
                <div>
                <div>
                    <p class="text-text255 text-xs capitalize">
                    đăng nhập/ đăng ký
                    </p>
                </div>
                <div class="flex items-center justify-start">
                    <p class="text-[#fff] capitalize">
                    tài khoản <i class="fa-solid fa-sort-down"></i>
                    </p>
                </div>
                </div>
            </div>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <a class="text-white" href="/admin">Admin</a>
            </div>
            </div>
        </div>
        </section>
        `;
  },
};

export default Header;
