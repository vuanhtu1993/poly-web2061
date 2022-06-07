import {apiGet} from '../api'

const Home = {
    render: async function() {
        let data = await apiGet('/books')
        console.log(data)
        let categories = data.map(i => i.categories?.name)
        categories = categories.filter(function(item, pos) {
            return categories.indexOf(item) == pos;
        })
        return /*html*/`
        <div class="container mx-auto flex space-x-3">
            <div class="w-1/3">
                <h3 class="text-xl font-bold">Danh mục</h3>
                <ul>
                    ${categories.map(c => `<li><button class="text-primary py-2 border-b-2 border-gray-300">${c}</button></li>`).join('')}
                </ul>
            </div>
            <div class="w-full">
                <h3 class="text-xl font-bold">Filter</h3>
                <div class="grid grid-cols-4 gap-4">
                    ${data.map(book => {
                        if(!book.isHidden) {
                            return /*html*/`
                            <a href="/books/${book.id}">
                                <img class="max-h-[200px]" src="${book.images[0].base_url}" alt="">
                                <p>${book.name}</p>
                                <p>${book.original_price}</p>
                            </a>
                            `
                        }
                    }).join('')}
                </div>
            </div>
        </div>  
        `
    }
}

export default Home