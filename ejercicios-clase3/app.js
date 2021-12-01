const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const nota3 = document.getElementById('nota3')
const promedio = document.querySelector('#btn-promedio')

promedio.addEventListener('click', consultarPromedio)

function consultarPromedio() {
    let primerNota = parseFloat(nota1.value)
    let segundaNota = parseFloat(nota2.value)
    let tercerNota = parseFloat(nota3.value)
    
    let porcentajeNota1 = primerNota * 0.25
    let porcentajeNota2 = segundaNota * 0.35
    let porcentajeNota3 = tercerNota * 0.4

    let resultado = porcentajeNota1 + porcentajeNota2 + porcentajeNota3

    if (resultado>=3.5){
        alert('Pasa la materia con un promedio de: ' + resultado)
    } else {
        alert('No pasa la materia, su promedio es de: '+ resultado)
    }
}