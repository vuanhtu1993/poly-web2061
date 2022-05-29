import { apiGet } from "../../api"

const BookDetail = {
    render: async function(param) {
        const book = await apiGet(`/books/${param.data.id}`)
        console.log(book)
        return /*html*/`
            <div class="flex">
                <img src="${book.image}" alt="">
                <div>
                    <div>${book.title}</div>
                    <div>${book.price}</div>
                </div>
            </div>
        `
    }
}

export default BookDetail