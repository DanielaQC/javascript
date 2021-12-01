const nombreInput = document.getElementById('nombre_input')
const boton = document.querySelector('#btn')

const cajaParrafo = document.querySelector('.caja')
const parrafo1 = document.getElementById('nombre_presentacion')
const parrafo2 = document.getElementById('presentacion_bienvenida')

boton.addEventListener('click', mostrar)

function mostrar() {
    const nombreMostrar = nombreInput.value

    cajaParrafo.style.opacity = 1

    parrafo1.textContent = `${nombreMostrar}`
    parrafo2.textContent = `Bienvenido a este programa.`

}