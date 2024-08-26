function Datos() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;


    localStorage.setItem('nombre', nombre);
    localStorage.setItem('edad', edad);

    alert('Datos guardados!');
}

function mostrar() {
    const nombre = localStorage.getItem('nombre');
    const edad = localStorage.getItem('edad');

    if (nombre && edad) {
        console.log(`Nombre: ${nombre}, Edad: ${edad}`);
    } else {
        alert('No hay datos guardados.');
    }
}