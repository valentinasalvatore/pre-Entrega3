const productosComida = [
    { id: 1, nombre: "Cookie", precio: 2200 },
    { id: 2, nombre: "Medialuna", precio: 1100 },
    { id: 3, nombre: "Torta tofi", precio: 3200 },
    { id: 4, nombre: "Chocotorta", precio: 4500 },
    { id: 5, nombre: "Chesscake de frutos rojos", precio: 4500 },
]

const productosCafe = [
    ...productosComida
    { id: 6, nombre: "Latte", precio: 3000 },
    { id: 7, nombre: "Cappuccino", precio: 2500 },
    { id: 8, nombre: "Americano", precio: 2000 },
    { id: 9, nombre: "Mocaccino", precio: 2800 },
    { id: 10, nombre: "Mocca", precio: 3000 },
    { id: 11, nombre: "Macchiato", precio: 2300 },
]

let carrito = [];

console.log(productosCafe);
function Productos(productosCafe) {
    const product = productos.find(p => p.id === productosCafe);

    carrito.push({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio
    })
    localStorage.setItem("Carrito", JSON.stringify(carrito));
}

