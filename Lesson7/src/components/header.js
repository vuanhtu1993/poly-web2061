const Header = {
    render: function() {
        return /*html*/`
        <div class="flex justify-between">
            <img class="w-12 md:w-28" src="../../assets/logo.png" alt="logo">
            <ul class="flex">
                <li><a href="">Home</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">About</a></li>
            </ul>
      </div>
        `
    }
}

export default Header