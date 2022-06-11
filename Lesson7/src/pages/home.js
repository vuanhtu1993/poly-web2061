import {apiGet} from '../api'
import Header from '../components/header'

const Home = {
    render: async function() {
        const paramUrl = new URLSearchParams(location.search)
        console.log(paramUrl.get('search'))
        const search = paramUrl.get('search')
        // if (search) {
        //     var data = await apiGet(`/books?q=${"search"}`)
        // } else {
        //     var data = await apiGet(`/books`)
        // }

        var data = await apiGet(`/books?q=${search}`)
        
        let categories = data.map(i => i.categories?.name)
        categories = categories.filter(function(item, pos) {
            return categories.indexOf(item) == pos;
        })

        return /*html*/`
        <div class="container mx-auto flex space-x-3 mt-8">
            <div class="w-1/3">
                <h3 class="text-xl font-bold">Danh mục</h3>
                <ul>
                    ${categories.map(c => 
                        /*html*/`<li>
                            <button data-categories="${c}" class="categories-btn text-primary py-2 border-b-2 border-gray-300">${c}</button>
                        </li>`
                        ).join('')}
                </ul>
            </div>
            <div class="w-full">
                <div class="">
                    ${categories.map(c => /*html*/`
                        <div class="flex space-x-3 mb-6 border-b-2 border-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <h4 class="text-primary text-xl font-bold">${c}</h4>
                        </div>
                        <div class="grid grid-cols-4 gap-3 mt-4 mb-4">
                            ${data.map(book => {
                                if(book.categories?.name == c && !book.isHidden) {
                                    return /*html*/`
                                        <div>
                                            <img class="max-h-[200px]" src="${book.images[0].base_url}">
                                            <p>${book.name}</p>
                                            <p>${book.original_price}</p>
                                        </div>
                                    `
                                }
                            }).join('')}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>  
        `
    },
    afterRender: function() {
        const btnElements = document.querySelectorAll('.categories-btn')
    }
}

export default Home