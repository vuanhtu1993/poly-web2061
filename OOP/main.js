// OOP
// 1. Class - khuôn
function Card(frontImg, backImg) {
    // this
    // Properties
    this.frontImg = frontImg
    this.backImg = backImg
    // Method
    this.flip = function() {

    }
}

// ES6
class Money {
    constructor(frontImg, backImg) {
        this.frontImg = frontImg
        this.backImg = backImg
    }
}

// Kế thừa
class VietnamMoney extends Money {
    // constructor() {
    //     // super()
    // }
}

const vnmoney = new VietnamMoney('https://picsum.photos/200/300')

// Object
// const card1 = new Card('https://picsum.photos/200/300', 'https://picsum.photos/200/300')
const arrCard = []
for(let i = 0; i < 12; i++) {
    const card = new Card('https://picsum.photos/200/300') 
    arrCard.push(card)
}

for(let i = 0; i < 12; i++) {
    // const card = new Card('https://picsum.photos/200/300') 
    // arrCard.push(card)
    arrCard[i].backImg = "https://picsum.photos/150/250"
}

const app = document.querySelector('#app')

const render = function() {
    app.innerHTML = /*html*/`
    ${arrCard.map(function(card, index) {
        return /*html*/`
        <div id="card" data-id="${index}">
            <img src="${card.backImg}"/>
        </div>
        `
    }).join('')}
    `
    console.log(arrCard);
}
render()
const cardElement = document.querySelectorAll('#card')
cardElement.forEach(function(e) {
    e.addEventListener('click', function() {
        console.log(e.dataset.id);
        const id = e.dataset.id
        arrCard[id].backImg = arrCard[id].frontImg
        render()
    })
})