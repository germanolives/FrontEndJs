function cargarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let li = document.createElement('li');
        li.textContent = `${producto.nombre} - $ ${producto.precio}`;
        listaCarrito.appendChild(li);
    }
}

function agregarProducto(event) {
    let producto = {
        id: event.target.getAttribute('data-id'),
        nombre: event.target.getAttribute('data-nombre'),
        precio: event.target.getAttribute('data-precio')
    };
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}


document.addEventListener('DOMContentLoaded', function () {
    cargarCarrito();
});

// Agregar producto al carrito
let botonesAgregar = document.getElementsByClassName('agregar-carrito');
for (let i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener('click', agregarProducto);
}

// Vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click', function () {
        localStorage.removeItem('carrito');
        cargarCarrito();
    });



