import { apiGet, remove } from "../../../api"
import { $ } from "../../../optionf"

const admin = {
        render: async function() {
                let data = await apiGet('/books')
                //console.log(data)
                return /*html*/ `
        <h1>ADMIN</h1>
<table>
        <thead>
        <tr class="bg-blue-600 py-3">
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Ảnh</th>
            <th>Tác giả</th>
            <th>Tùy chọn</th>
        </tr>
    </thead>
    <tbody>
     ${data.map(function(book,index){
         return /*html*/ `
        <tr>
                <td class="border border-1">${index}</td>    
                <td class="border border-1"><a href="/admin/books/${book.id}">${book.name}</a></td> 
                <td class="border border-1">${book.original_price}</td>  
                <td class="p-3 grid grid-cols-9 gap-2 border border-1">
                ${book.images.map(item =>
                    /*html*/`
               <img width="180" src="${item.base_url}"> 
               `).join('')}
                 </td>  
                 <td class="border border-1">${book.authors? book.authors.map(item=>item.name):""} </td>  
                 <td> <button class="remove-book bg-red-500 py-1 rounded mx-1 px-1 text-white" class="" data-id="${book.id}">Delete</button></td> 
                `}).join('')}
                
                </tr>  
    </tbody>
   
    </table>

    `
},
afterRender(){ 
    const removeBook = $('.remove-book')
    //console.log(removeBook)
    for (const book of removeBook){
        book.addEventListener('click', async function(e){
        e.preventDefault();
        let dataid=book.dataset.id
            if(book.classList.contains('remove-book')){
                const  confirm= window.confirm('Are you sure you want to deleteBook')
                if(confirm){
                    const data =  await remove(book)
                    if (data) {
                        console.log('delete thành công');
                    }
                }
            }
        
})}
    
    
}
}
export default admin