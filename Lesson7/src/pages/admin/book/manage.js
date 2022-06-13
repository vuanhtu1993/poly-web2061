import { apiGet, apiPut } from "../../../api";
import { $ } from "../../../optionf";

const adBookDetail = {
        render: async function(param) {
                // console.log(param, "=======param=======")
                const data = await apiGet(`/books/${param.data.id}`)



                return /*html*/ `
            <div class="container mx-auto">
                <h2 class="text-2xl text-primary-dark mt-5">Admin/Book Detail</h2>
                <div class="flex space-x-4 mt-3">
                    <form id="formPut" class="w-full max-w-lg">
                    <input id="id" type="hidden" value="${data.id}">
                        <div class="w-full">
                            <label>Tên sản phẩm</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="name" 
                            type="text" 
                            value="${data.name}"
                            >
                        </div>
                        <div class="w-full">
                            <label>Tên tác giả</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="authors-name" 
                            type="text" 
                            value="${data.authors?.[0].name}"
                            >
                        </div>
                        <div class="w-full">
                            <label>categories</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="categories-name" 
                            type="text" 
                            value="${data.categories?.name}"
                            >
                        </div>
                        <div class="w-full">
                            <label>SellerPrice</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="SellerPrice" 
                            type="number" 
                            value="${data.current_seller.price}"
                            >
                        </div>
                        <div class="w-full">
                            <label>Số sao</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="rating_average" 
                            type="number" 
                            value="${data.rating_average}"
                            min="0"
                            max="5"
                            >
                        </div>
                        <div class="w-full mt-3">
                            <label>Mô tả ngắn</label>
                            <textarea class="block w-full border rounded py-3 px-4 mb-3" 
                            id="short_description" 
                            cols="50"
                            rows="5"
                            type="text">${data.short_description}</textarea>
                        </div>
                        <div class="w-full mt-3">
                            <label>Mô tả</label>
                            <textarea class="block w-full border rounded py-3 px-4 mb-3" 
                            id="description" 
                            cols="50"
                            rows="5"
                            type="text">${data.description}</textarea>
                        </div>
                        <div class="w-full">
                            <label>isHidden</label>
                            <input class="py-2 my-2"
                            id="hidden" 
                            type="checkbox"
                            value="${data.isHidden}"                          
                            >
                        </div>
                        <div class="grid grid-cols-2">
                        <button id="chitiet" class="bg-[#5c92ff] rounded mx-3"><a href="detail/${param.data.id}">Thông số chi tiết</button>
                        <button id="btn-submit" class="bg-[#5c92ff] px-4 py-1 rounded mx-3">Submit</button>
                        </div>
        
                    </form>
                    <div>
                        <img src="${data.images[0].base_url}" alt="image">
                      <div class="grid grid-cols-7 gap-5">
                      ${data.images.map(function (img){
                        return /*html*/`
                        <a href=""><img src="${img.thumbnail_url}"></a>
                        `
                      }).join('')}        
                      </div>
                    </div>
                    <div class="">
                    
                    </div>
                </div>
                
            </div>
        `
    },
   async afterRender(){
      const id = document.querySelector('#id').value;
      const newbook = await apiGet(`/books/${id}`)
      const name =document.querySelector('#name')
      const authors = $('#authors-name')
      const categories = $('#categories-name')
      const SellerPrice = $('#SellerPrice')
      const rating_average = $('#rating_average')
      const short_description =$('#short_description')
      const description =$('#description')
      const btnhidden =$('#hidden')
      console.log(newbook.hidden)
      console.log(btnhidden.checked)
      if(newbook.hidden === "false" ||newbook.hidden === false|| newbook.hidden === "undefined" || newbook.hidden === undefined){
        btnhidden.checked =false
        console.log("vao false")
      }else{
        btnhidden.checked =true
        console.log("vao true")
      }
      console.log(btnhidden.checked)
        //console.log($('#hidden').value)
  //console.log(newbook.authors[0].name)
    
      const btnsub = document.querySelector("#btn-submit")
      btnsub.addEventListener("click",function(e){
        e.preventDefault()
        if( newbook.name){
            newbook.name = name.value
        }     
        if(authors[0])
        {newbook.authors[0].name = authors.value
            newbook.authors[0].slug = authors.value.toLowerCase().replace(/\s/g, '-')}    
        if(newbook.categories.name){
            newbook.categories.name = categories.value
        }
        if(newbook.current_seller.price)
        {newbook.current_seller.price = SellerPrice.value}

        if(newbook.rating_average)
        {newbook.rating_average = rating_average.value}

        if(newbook.short_description)  
        {
            newbook.short_description =short_description.value}
        if(newbook.description)
        {newbook.description =description.value}  
        newbook.hidden = btnhidden.checked
        if(newbook.isHidden){
            newbook.isHidden = btnhidden.checked
        }
         apiPut(`/books/${id}`, newbook)
         .then(res=> alert('Update dữ liệu thành công!'))
         .catch(err=> alert("error"))
      })

    }
}

export default adBookDetail;