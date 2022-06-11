const reRender = async function (element, component) {
    if(element) {
        document.querySelector(element).innerHTML = await component.render()
    }
    if(component.afterRender) {
        component.afterRender()
    }
}

export default reRender