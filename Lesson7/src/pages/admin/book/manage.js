import { apiGet, apiPut } from "../../../api";

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
                        <div class="grid grid-cols-2">
                        <button class="bg-[#5c92ff] rounded mx-3">back</button>
                        <button id="btn-submit" class="bg-[#5c92ff] rounded mx-3">Submit</button>
                        </div>
        
                    </form>
                    <div>
                        <img src="${data.images[0].base_url}" alt="image">
                      <div class="grid grid-cols-7 gap-5">
                      ${data.images.map(function (img){
                        return /*html*/`
                        <a href=""><img src="${img.thumbnail_url}"></a>
                        `
                      })}        
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
    
      const btnsub = document.querySelector("#btn-submit")
      btnsub.addEventListener("click",function(e){
        e.preventDefault()
         newbook.name = name.value
         apiPut(`/books/${id}`, newbook)
         .then(res=> alert('Update dữ liệu thành công!'))
         .catch(err=> alert("error"))
      })

    }
}

export default adBookDetail;