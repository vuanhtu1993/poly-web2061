import { apiGet, apiCrawl, apiPost } from "../../api"

const Crawl = {
    render: async function(params) {
        const id = params.data.id
        const data = await apiCrawl(`https://tiki.vn/api/v2/products/${id}`)
        let _new = {
            authors: data.authors,
            book_cover: data.book_cover,
            categories: data.categories,
            current_seller: data.current_seller,
            description: data.description,
            images: data.images,
            list_price: data.list_price,
            name: data.name,
            original_price: data.original_price,
            quantity_sold: data.quantity_sold,
            rating_average: data.rating_average,
            short_description: data.short_description,
            specifications: data.specifications,
        }
        const res = await apiPost('/books', _new)
        return JSON.stringify(_new)
    }
}

export default Crawl