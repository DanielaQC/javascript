const nombre = document.getElementById('nombre')
const edad = document.getElementById('edad')
const consultar = document.querySelector('#btn-consulta')

consultar.addEventListener('click', consultarVotacion)

function consultarVotacion() {
    let nombreUsuario = nombre.value
    let edadUsuario = parseInt(edad.value)

    if (edadUsuario>=18){
        alert('Señor@ '+ nombreUsuario+ ' \nSi puede votar este año')
    } else {
        alert('Señor@ '+ nombreUsuario+ ' \nNo puede votar este año')
    }
}