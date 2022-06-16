import { apiGet, apiCrawl, apiPost } from "../../api"

const Crawl = {
    render: async function(params) {
        const id = params.data.id
        const data = await apiCrawl(`https://tiki.vn/api/v2/products/${id}`)
        let _new = {
            categories: data.categories,
            description: data.description,
            images: data.images[0],
            name: data.name,
            sale_price: data.current_seller.price,
            original_price: data.original_price,
            quantity_sold: data.quantity_sold,
            rating: data.rating_average,
            short_description: data.short_description,
            specifications: data.specifications[0].attributes,
        }
        const res = await apiPost('/cellphones', _new)
        return JSON.stringify(_new)
    }
}

export default Crawl