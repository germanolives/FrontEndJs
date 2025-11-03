// function cargarCarrito() {
//     let listaCarrito = document.getElementById('lista-carrito');
//     listaCarrito.innerHTML = '';
//     let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
//     for (let i = 0; i < carrito.length; i++) {
//         let producto = carrito[i];
//         let li = document.createElement('li');
//         li.textContent = `${producto.nombre} - $ ${producto.precio}`;
//         listaCarrito.appendChild(li);
//     }
// }



function cargarCarrito() {
    const listaPedidos = JSON.parse(localStorage.getItem('carrito')) || [];
    if(listaPedidos.length){
        const mainCart = document.querySelector('main');
        let pedido = document.createElement('section');
        pedido.innerText = 'LISTA DE PRODUCTOS';
        mainCart.appendChild(pedido);
        for(let i=0; i<listaPedidos.length; i++){
            console.log(listaPedidos[i]);
            let itemPedido = document.createElement('article');
            itemPedido.classList.add('articuloCarrito');
            let h2Producto = document.createElement('h3');
            h2Producto.innerText = listaPedidos[i].productoNombre.toUpperCase();
            let imagenProducto = document.createElement('img');
            imagenProducto.setAttribute('src', listaPedidos[i].productoRutaImagen);
            imagenProducto.setAttribute('widht', listaPedidos[i].productoAnchoImagen/2);
            imagenProducto.setAttribute('height', listaPedidos[i].productoAltoImagen/2);
            console.log(imagenProducto);
            itemPedido.appendChild(h2Producto);
            itemPedido.appendChild(imagenProducto);
            pedido.appendChild(itemPedido);
            
        }
    }

        
    };





document.addEventListener('DOMContentLoaded', function () {
    cargarCarrito();
});



// // Vaciar carrito
// document.getElementById('vaciar-carrito').addEventListener('click', function () {
//         localStorage.removeItem('carrito');
//         cargarCarrito();
//     });



