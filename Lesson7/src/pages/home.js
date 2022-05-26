import { apiGet } from "../api"

const Home = {
    render: async function() {
        const data = await apiGet('/books')
        // console.log(data)
        return /*html*/`
        <div class="text-center">
            <h1 class="bg-blue-300">Hello Vite!</h1>
            <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
        </div>  
        `
    }
}

export default Home