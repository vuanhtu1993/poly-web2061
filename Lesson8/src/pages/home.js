import { apiGet } from "../service/api"

const Home = {
    render: async function() {
        const cellphones = await apiGet('/cellphones')
        console.log(cellphones)
        return /*html*/`
            <h1 class="bg-red-100">Home</h1>
            <div class="grid grid-cols-5 gap-3">
                ${cellphones.map(function(phone) {
                    return /*html*/`
                    <div>
                        <img src="${phone.images.base_url}">
                        <p>${phone.name}</p>
                    </div>
                    `
                }).join('')}
            </div>
        `   
    }
}

export default Home