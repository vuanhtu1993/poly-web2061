import {apiGet} from '../api'

const Home = {
    render: async function() {
        let data = await apiGet('/books')
        console.log(data)
        return /*html*/`
        <div class="flex">
            <div class="w-1/3">
                <h3>Danh muc</h3>
            </div>
            <div class="w-full">
                <div>Filter</div>
                <div class="grid grid-cols-4 gap-4">
                    ${data.map(item => /*html*/`
                        <a href="/books/${item.id}">
                            <img src="${item.image}" alt="">
                            <p>${item.title}</p>
                            <p>${item.sale_off}</p>
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>  
        `
    }
}

export default Home