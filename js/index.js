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


document.getElementById('boton-tituloBusqueda').addEventListener('click', switchTituloBusqueda);
document.getElementById('boton-claroOscuro').addEventListener('click', switchClaroOscuro);


function precioTextoANumero(precio) {
   precio = parseFloat(precio.split('.').join('').replace(',', '.'));
   return precio;
}

// let precio = document.getElementById('valorAlmendra').textContent;
// precio = precioTextoANumero(precio);
// document.getElementById('precioAlmendra').value = precio;


let precio = document.querySelectorAll('.compra .precioProducto');
let valorPrecio = document.querySelectorAll('.precio p');
for(i=0;precio.length;i++) {
   valorPrecio[i].textContent = precio[i].value;
}



















































// const elementoH1 = document.getElementById('titulo');
// const elementoSearch = document.getElementById('search');
// const botonLupaSwitchOff = document.getElementById('lupaToggleOff');
// const botonLupaSwitchOn = document.getElementById('lupaToggleOn');
// const botonLunaSwitchOff = document.getElementById('lunaToggleOff');
// const botonLunaSwitchOn = document.getElementById('lunaToggleOn');
// const elementoBody = document.querySelector('body');
// const elementoNav = document.querySelector('.nav');
// const elementoLogo = document.querySelector('.logo');
// const elementoTyc = document.querySelector('.tyc');
// const elementoThreads = document.querySelector('.threads');
// const elementoTiktok = document.querySelector('.tiktok');
// const elementoTwitter = document.querySelector('.twitter');
// const elementoClassH1 = document.querySelector('.h1');
// const elementoContenedorCategorias = document.querySelector('.categorias');
// const elementoContenedorAceites = document.querySelector('.aceites');
// const elementoContenedorFrutosSecos = document.querySelector('.frutosSecos');
// const elementoContenedorSemillas = document.querySelector('.semillas');
// const elementosToggle = document.querySelectorAll('.toggle');
// const elementosToggleOn = document.querySelectorAll('.toggleOn');

// let verOcultarLupa = function() {
//   elementoH1.classList.toggle('oculto');
//   elementoSearch.classList.toggle('visible');
//   botonLupaSwitchOff.classList.toggle('oculto');
//   botonLupaSwitchOn.classList.toggle('visible');
// }

// let modoNocturno = function() {
//   elementoBody.classList.toggle('dark');
//   elementoTyc.classList.toggle('tycDark');
//   elementoThreads.classList.toggle('threadsDark');
//   elementoTiktok.classList.toggle('tiktokDark');
//   elementoTwitter.classList.toggle('twitterDark');
//   elementoClassH1.classList.toggle('h1Dark');
//   elementoNav.classList.toggle('navDark');
//   elementoLogo.classList.toggle('logoDark');
//   elementoContenedorCategorias.classList.toggle('categoriasDark');
//   elementoContenedorAceites.classList.toggle('aceitesDark');
//   elementoContenedorFrutosSecos.classList.toggle('frutosSecosDark');
//   elementoContenedorSemillas.classList.toggle('semillasDark');
//   botonLunaSwitchOff.classList.toggle('oculto');
//   botonLunaSwitchOn.classList.toggle('visible');
//   for(i=0;i<elementosToggle.length;i++) {
//     elementosToggle[i].classList.toggle('toggleDark');
//   }
//   for(i=0;i<elementosToggleOn.length;i++) {
//     elementosToggleOn[i].classList.toggle('toggleOnDark');
//   }
// }


// botonLupaSwitchOff.addEventListener('click', verOcultarLupa);
// botonLupaSwitchOn.addEventListener('click', verOcultarLupa);
// botonLunaSwitchOff.addEventListener('click', modoNocturno);
// botonLunaSwitchOn.addEventListener('click', modoNocturno);

// const botonTituloBusqueda = document.getElementById('boton-tituloBusqueda');
// const botonClaroOscuro = document.getElementById('boton-claroOscuro');


// botonTituloBusqueda.addEventListener('click', switchTituloBusqueda);
// botonClaroOscuro.addEventListener('click', switchClaroOscuro);

// function switchTitulo() {
//    const h1 = document.getElementById('titulo');
//    const search = document.getElementById('search');
//    const boton = document.getElementById('boton-tituloBusqueda');
//    h1.classList.remove('oculto');
//    search.classList.remove('visible');
//    boton.classList.remove('activo');
//    localStorage.setItem('searchOn', 'false');
// }

// function switchClaro() {
//    const classLogo = document.querySelector('.logo');
//    const classH1 = document.getElementById('divH1');
//    const classNav = document.querySelector('.nav');
//    const botonTituloBusqueda = document.getElementById('boton-tituloBusqueda');
//    const tyc = document.querySelector('.tyc');
//    const threads = document.querySelector('.threads');
//    const tiktok = document.querySelector('.tiktok');
//    const twitter = document.querySelector('.twitter');
//    // const contenedorCategorias = document.querySelector('.categorias');
//    // const contenedorAceites = document.querySelector('.aceites');
//    // const contenedorFrutosSecos = document.querySelector('.frutosSecos');
//    // const contenedorSemillas = document.querySelector('.semillas');
//    const boton = document.getElementById('boton-claroOscuro');
//    body.classList.remove('dark');
//    classLogo.classList.remove('logoDark');
//    classH1.classList.remove('h1Dark');
//    classNav.classList.remove('navDark');
//    botonTituloBusqueda.classList.remove('tituloBusquedaDark');
//    tyc.classList.remove('tycDark');
//    threads.classList.remove('threadsDark');
//    tiktok.classList.remove('tiktokDark');
//    twitter.classList.remove('twitterDark');
//    // contenedorCategorias.classList.remove('categoriasDark');
//    // contenedorAceites.classList.remove('aceitesDark');
//    // contenedorFrutosSecos.classList.remove('frutosSecosDark');
//    // contenedorSemillas.classList.remove('semillasDark');
//    boton.classList.remove('claroOscuroDark');
//    boton.classList.remove('activo');
//    localStorage.setItem('DarkOn', 'false');  
// }

// let estadoSearchActivo = localStorage.getItem('searchOn');
// let estadoDarkActivo = localStorage.getItem('DarkOn');