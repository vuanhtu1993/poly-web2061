import { apiGet } from "../../api"

const BookDetail = {
    render: async function(param) {
        console.log(param)
        const book = await apiGet(`/books/${param.id}`)
        return /*html*/`
            <div class="flex">
                <img src="${book.image}" alt="image">
                <div>
                    <div>${book.title}</div>
                    <div>${book.price}</div>
                </div>
            </div>
        `
    }
}

export default BookDetail