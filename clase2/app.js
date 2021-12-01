const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')

const sum = document.querySelector('#btn-sum')
const substract = document.querySelector('#btn-substract')
const multiply = document.querySelector('#btn-multiply')
const div = document.querySelector('#btn-div')

const result = document.getElementById('result')

sum.addEventListener('click', sum_operation)
substract.addEventListener('click', sub_operation)
multiply.addEventListener('click', multiply_operation)
div.addEventListener('click', div_operation)

function sum_operation(){
    let num1 = parseFloat(number1.value)
    let num2 = parseFloat(number2.value)
    result.textContent = `Your result is : ${num1+num2}`
    result.style.color = 'white'
}

function sub_operation() {
    let num1 = parseFloat(number1.value)
    let num2 = parseFloat(number2.value)
    result.textContent = `Your result is : ${num1-num2}`
    result.style.color = 'white'
}

function multiply_operation() {
    let num1 = parseFloat(number1.value)
    let num2 = parseFloat(number2.value)
    result.textContent = `Your result is : ${num1*num2}`
    result.style.color = 'white'
}

function div_operation() {
    let num1 = parseFloat(number1.value)
    let num2 = parseFloat(number2.value)
    result.textContent = `Your result is : ${num1/num2}`
    result.style.color = 'white'

    if(num2==0){
        alert('la operacion no se puede hacer')
        num1 = 0
        num2 = 0
    }
}


// palabras reservedas para crear variables

// let  number1,number2
// let operation
// let result

// console.log(calculate(6,2,1))

// function calculate(n1,n2,operation) {
    
//     switch (operation) {
//         case 1:
//             return sum(n1,n2)
//         case 2:
//             return substract(n1,n2)
//         case 3:
//             return multiply(n1,n2)
//         case 4:
//             return division(n1,n2)
        
//         default:
//             break
//     }

// }

// function sum(n1,n2){
//     return n1 + n2
// }

// function substract(n1,n2){
//     return n1 - n2
// }

// function multiply(n1,n2){
//     return n1 * n2
// }

// function division(n1,n2){
//     return n1 / n2
// }

