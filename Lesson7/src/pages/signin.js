import { signin } from '../api/auth'

const Signin = {

    render() {
        return /*html*/ `

        <div class="container">
        <h1>Đăng ký</h1>

        <form id="form"> 
        <input class=" border-2" type="email" id="email">
        <input class="border-2"type="password" id="password">
        <button class="bg-[#4172e4]"> Đăng ký  </button>
        </form>
        </div>
        `
    },
    afterRender() {
        const formsignin = $('.form')
        console.log(formsignin)
    }
}
export default Signin