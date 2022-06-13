import { apiGet, apiPut } from "../../../api";
import { $ } from "../../../optionf";

const adBookDetailSpecifications = {
        render: async function(param) {
                // console.log(param, "=======param=======")
                const data = await apiGet(`/books/${param.data.id}`)

                const specifications =data.specifications[0].attributes
                return /*html*/ `
            <div class="container mx-auto">
                <h2 class="text-2xl text-primary-dark mt-5">Admin/Book Detail/specifications</h2>
                <div class="flex space-x-4 mt-3">
                    <form id="formPut" class="w-full max-w-lg">
                    <input id="id" type="hidden" value="${data.id}">
            <table class="table-auto">
                 <tbody>

                 ${specifications.map(function (spec) {
              return /*html*/`
                  <tr>
                  <td class="bg-[#efefef] px-4 py-4 border  ">${spec.name}</td>
                  <td class="px-4 rounded border"><input type="text" value=${spec.value}> </td>
                  
              </tr>`
                 }).join('')
                 }

                 </tbody>
              </table>
                        
                        <div class="grid grid-cols-2 py-3">
                        <button id="chitiet" class="bg-[#5c92ff] rounded mx-3 "><a href="detail/${param.data.id}">Thông số chi tiết</button>
                        <button id="btn-submit" class="bg-[#5c92ff] rounded px-4 py-1"> Submit </button>
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
    
      const btnsub = document.querySelector("#btn-submit")
      btnsub.addEventListener("click",function(e){
        e.preventDefault()
       
        
         apiPut(`/books/${id}`, newbook)
         .then(res=> alert('Update dữ liệu thành công!'))
         .catch(err=> alert("error"))
      })

    }
}

export default adBookDetailSpecifications;