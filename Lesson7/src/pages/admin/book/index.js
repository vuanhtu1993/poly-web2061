import { apiGet } from "../../../api"

const admin = {
        render: async function() {
                let data = await apiGet('/books')
                console.log(data)
                return /*html*/ `
        <h1>ADMIN</h1>
<table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Ảnh 1</th>
            <th>Tác giả</th>
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
               `)}
                 </td>  
                 <td class="border border-1">${book.authors? book.authors.map(item=>item.name):""} </td>  
                   </tr>    
                `}).join('')}
        
    </tbody>
   
    </table>

    `
}
}
export default admin