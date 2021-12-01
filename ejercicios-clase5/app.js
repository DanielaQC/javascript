const button = document.getElementById('btn_generate')
const body = document.querySelector('body')
const colorNumber = document.querySelector('.p_color')
const colorCard = document.querySelector('.color_card')

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256) 
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const rgbColor = `rgb(${r},${g},${b})`;
    return rgbColor
}

function setBackground() {
    const newColor = generateRandomColor()
    colorNumber.innerHTML = newColor
    body.style.backgroundColor = newColor
    colorCard.style.backgroundColor = newColor
}

button.addEventListener('click', setBackground)