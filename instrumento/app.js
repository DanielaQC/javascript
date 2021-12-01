const URL = 'https://dog.ceo/api/breeds/image/random'
const cards = document.getElementById('card')
const templateCard = document.getElementById('template_cards').content
const numberCards = document.getElementById('input_generate')
const buttonGenerate1 = document.getElementById('button_generate1')
const buttonGenerate3 = document.getElementById('button_generate3')
const buttonGenerate9 = document.getElementById('button_generate9')
const buttonGenerate12 = document.getElementById('button_generate12')
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', ()=>{
    FetchApi()
})

buttonGenerate1.addEventListener('click', generate)
buttonGenerate3.addEventListener('click', generate)
buttonGenerate9.addEventListener('click', generate)
buttonGenerate12.addEventListener('click', generate)

function FetchApi() {

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        cards.innerHTML = ''
        const showDogs = data
        SelectOption(showDogs)
        showCards(showDogs)
    })

}

const showCards = dog => {

    cards.innerHTML = ''
    templateCard.querySelector('#img_card').src = message
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
    cards.appendChild(fragment)

}

const SelectOption = event => {

    if (event.keyCode === '13') {

        let number = numberCards.values
        for (let index = 0; index < number; index++) {
            showCards(dog)
        }

    }

}

function generate() {

    if (buttonGenerate1) {
        for (let index = 0; index < 1; index++) {
            showCards()

        }
    }

    if (buttonGenerate3) {
        for (let index = 0; index < 3; index++) {
            showCards(dog)
        }
    }

    if (buttonGenerate9) {
        for (let index = 0; index < 9; index++) {
            showCards(dog)
        }
    }

    if (buttonGenerate12) {
        for (let index = 0; index < 12; index++) {
            showCards(dog)
        }
    }

}