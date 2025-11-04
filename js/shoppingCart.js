function switchTituloBusqueda() {
    const h1 = document.getElementById('titulo');
    const search = document.getElementById('search');
    h1.classList.toggle('oculto');
    search.classList.toggle('visible');
    this.classList.toggle('activo');
    let marcadorActivo = this.classList.contains('activo');
    if (marcadorActivo) {
      localStorage.setItem('searchOn', 'true');
    }
    else {
      localStorage.setItem('searchOn', 'false');
    }
}
function switchBusqueda() {
   const h1 = document.getElementById('titulo');
   const search = document.getElementById('search');
   const boton = document.getElementById('boton-tituloBusqueda');
   h1.classList.add('oculto');
   search.classList.add('visible');
   boton.classList.add('activo');
   localStorage.setItem('searchOn', 'true');
}
function switchClaroOscuro() {
   const body = document.querySelector('body');
   const classLogo = document.querySelector('.logo');
   const classH1 = document.getElementById('divH1');
   const classNav = document.querySelector('.nav');
   const botonTituloBusqueda = document.getElementById('boton-tituloBusqueda');
   const tyc = document.querySelector('.tyc');
   const threads = document.querySelector('.threads');
   const tiktok = document.querySelector('.tiktok');
   const twitter = document.querySelector('.twitter');
   body.classList.toggle('dark');
   classLogo.classList.toggle('logoDark');
   classH1.classList.toggle('h1Dark');
   classNav.classList.toggle('navDark');
   botonTituloBusqueda.classList.toggle('tituloBusquedaDark');
   tyc.classList.toggle('tycDark');
   threads.classList.toggle('threadsDark');
   tiktok.classList.toggle('tiktokDark');
   twitter.classList.toggle('twitterDark');
   this.classList.toggle('claroOscuroDark');
   this.classList.toggle('activo');
   let marcadorActivo = this.classList.contains('activo');
   if (marcadorActivo) {
      localStorage.setItem('DarkOn', 'true');
   }
   else {
      localStorage.setItem('DarkOn', 'false');
   }
}
function switchOscuro() {
   const body = document.querySelector('body');
   const classLogo = document.querySelector('.logo');
   const classH1 = document.getElementById('divH1');
   const classNav = document.querySelector('.nav');
   const botonTituloBusqueda = document.getElementById('boton-tituloBusqueda');
   const tyc = document.querySelector('.tyc');
   const threads = document.querySelector('.threads');
   const tiktok = document.querySelector('.tiktok');
   const twitter = document.querySelector('.twitter');
   const boton = document.getElementById('boton-claroOscuro');
   body.classList.add('dark');
   classLogo.classList.add('logoDark');
   classH1.classList.add('h1Dark');
   classNav.classList.add('navDark');
   botonTituloBusqueda.classList.add('tituloBusquedaDark');
   tyc.classList.add('tycDark');
   threads.classList.add('threadsDark');
   tiktok.classList.add('tiktokDark');
   twitter.classList.add('twitterDark');
   boton.classList.add('claroOscuroDark');
   boton.classList.add('activo');
   localStorage.setItem('DarkOn', 'true');
}


if (localStorage.getItem('searchOn') == 'true') {
   switchBusqueda();
}
if (localStorage.getItem('DarkOn') == 'true') {
   switchOscuro();
}


function contarCarrito() {
   const listaPedidos = JSON.parse(localStorage.getItem('carrito')) || [];
   const numCarrito = document.querySelector('.counterCarrito sub');
   numCarrito.innerText = listaPedidos.length;
}

document.addEventListener('DOMContentLoaded', function () {
   cargarCarrito();
   contarCarrito();
});

document.getElementById('boton-tituloBusqueda').addEventListener('click', switchTituloBusqueda);
document.getElementById('boton-claroOscuro').addEventListener('click', switchClaroOscuro);






// function contarCarrito() {
//    const listaPedidos = JSON.parse(localStorage.getItem('carrito')) || [];
//    return listaPedidos.length
// }

// contarCarrito();
// const numCarrito = document.querySelector('.counterCarrito sub');
// numCarrito.innerText = contarCarrito();

function cargarCarrito() {
    const listaPedidos = JSON.parse(localStorage.getItem('carrito')) || [];
    if(listaPedidos.length){
        const mainCart = document.querySelector('main');
        let pedidos = document.createElement('section');
        let h2Pedidos = document.createElement('h2');
        let pedido = document.createElement('div');
        pedidos.classList.add('pedidos');
        h2Pedidos.classList.add('h2');
        h2Pedidos.innerText = 'MI CARRITO';
        
        pedido.classList.add('div');
        mainCart.appendChild(pedidos);
        pedidos.appendChild(h2Pedidos);
        pedidos.appendChild(pedido);
        for(let i=0; i<listaPedidos.length; i++){
            // console.log(listaPedidos[i]);
            let itemPedido = document.createElement('article');
            itemPedido.classList.add('articuloCarrito');
            itemPedido.style.backgroundColor = listaPedidos[i].cardColor;
            let h2Producto = document.createElement('h3');
            h2Producto.innerText = listaPedidos[i].productoNombre.toUpperCase();
            let imagenProducto = document.createElement('img');
            imagenProducto.setAttribute('src', listaPedidos[i].productoRutaImagen);
            imagenProducto.setAttribute('widht', listaPedidos[i].productoAnchoImagen/2);
            imagenProducto.setAttribute('height', listaPedidos[i].productoAltoImagen/2);

            itemPedido.appendChild(h2Producto);
            itemPedido.appendChild(imagenProducto);
            pedido.appendChild(itemPedido);
            
        }
    }

        
    };





// document.addEventListener('DOMContentLoaded', function () {
//     cargarCarrito();
// });



// // Vaciar carrito
// document.getElementById('vaciar-carrito').addEventListener('click', function () {
//         localStorage.removeItem('carrito');
//         cargarCarrito();
//     });



