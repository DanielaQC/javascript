const titleM = document.getElementById('title-number')
const inputM = document.getElementById('input-number')

const randomNumber = Math.round(Math.random() * 25)
console.log(randomNumber)

inputM.addEventListener('keyup', magicNumber)

function magicNumber(event) {

    if(event.keyCode=='13'){

        const inputNumber = parseInt(inputM.value)
        
        if (inputNumber<randomNumber) {
            titleM.textContent = `The magic number is greater than: ${inputNumber}`
            titleM.style.color = 'blue'
        } else if (inputNumber>randomNumber) {
            titleM.textContent = `The magic number is less than: ${inputNumber}`    
            titleM.style.color = 'red'
        } else {
            titleM.textContent = `The magic number is correct :)`
            titleM.style.color = 'green'
            inputM = ''
        }

    }

}