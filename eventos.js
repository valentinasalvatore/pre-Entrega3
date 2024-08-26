document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('eventoUno');

    if (boton) {
        boton.addEventListener('click', function() {
            boton.style.backgroundColor = 'green';
            boton.style.color = 'white';
        });
    } else {
        console.error('No se encontró el botón con el ID "miBoton".');
    }
});