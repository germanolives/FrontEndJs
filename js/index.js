 let switchTituloBusqueda = function() {
    const h1 = document.getElementById('titulo');
    const search = document.getElementById('search');
    h1.classList.toggle('oculto');
    search.classList.toggle('visible');
    this.classList.toggle('activo');
 }

 let switchClaroOscuro = function() {
    const body = document.querySelector('body');
    const classLogo = document.querySelector('.logo');
    const classH1 = document.getElementById('divH1');
    const classNav = document.querySelector('.nav');
    const botonTituloBusqueda = document.getElementById('boton-tituloBusqueda');
    const tyc = document.querySelector('.tyc');
    const threads = document.querySelector('.threads');
    const tiktok = document.querySelector('.tiktok');
    const twitter = document.querySelector('.twitter');
    const contenedorCategorias = document.querySelector('.categorias');
    const contenedorAceites = document.querySelector('.aceites');
    const contenedorFrutosSecos = document.querySelector('.frutosSecos');
    const contenedorSemillas = document.querySelector('.semillas');
    body.classList.toggle('dark');
    classLogo.classList.toggle('logoDark');
    classH1.classList.toggle('h1Dark');
    classNav.classList.toggle('navDark');
    botonTituloBusqueda.classList.toggle('tituloBusquedaDark');
    this.classList.toggle('activo');
    this.classList.toggle('claroOscuroDark');
    tyc.classList.toggle('tycDark');
    threads.classList.toggle('threadsDark');
    tiktok.classList.toggle('tiktokDark');
    twitter.classList.toggle('twitterDark');
    contenedorCategorias.classList.toggle('categoriasDark');
    contenedorAceites.classList.toggle('aceitesDark');
    contenedorFrutosSecos.classList.toggle('frutosSecosDark');
    contenedorSemillas.classList.toggle('semillasDark');
 }

const botonTituloBusqueda = document.getElementById('boton-tituloBusqueda');
const botonClaroOscuro = document.getElementById('boton-claroOscuro');


botonTituloBusqueda.addEventListener('click', switchTituloBusqueda);
botonClaroOscuro.addEventListener('click', switchClaroOscuro);




























































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


