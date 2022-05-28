import {apiGet} from '../api'

const Home = {
    render: function() {
        return /*html*/`
        <div class="flex">
            <div class="w-1/3">
                <h3>Danh muc</h3>
            </div>
            <div class="w-full">
                <div>Filter</div>
                <div class="grid grid-cols-4 gap-4">
                </div>
            </div>
        </div>  
        `
    }
}

export default Home