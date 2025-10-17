const elementoH1 = document.getElementById('titulo');
const elementoSearch = document.getElementById('search');
const botonLupaSwitchOff = document.getElementById('lupaToggleOff');
const botonLupaSwitchOn = document.getElementById('lupaToggleOn');
const botonLunaSwitchOff = document.getElementById('lunaToggleOff');
const botonLunaSwitchOn = document.getElementById('lunaToggleOn');
const elementoBody = document.querySelector('body');
const elementoNav = document.querySelector('.nav');
const elementoLogo = document.querySelector('.logo');
const elementoTyc = document.querySelector('.tyc');
const elementoThreads = document.querySelector('.threads');
const elementoTiktok = document.querySelector('.tiktok');
const elementoTwitter = document.querySelector('.twitter');
const elementoClassH1 = document.querySelector('.h1');
const elementoContenedorCategorias = document.querySelector('.categorias');
const elementoContenedorAceites = document.querySelector('.aceites');
const elementoContenedorFrutosSecos = document.querySelector('.frutosSecos');
const elementoContenedorSemillas = document.querySelector('.semillas');

let verOcultarLupa = function() {
  elementoH1.classList.toggle('oculto');
  elementoSearch.classList.toggle('visible');
  botonLupaSwitchOff.classList.toggle('oculto');
  botonLupaSwitchOn.classList.toggle('visible');
}

let modoNocturno = function() {
  elementoBody.classList.toggle('dark');
  elementoTyc.classList.toggle('tycDark');
  elementoThreads.classList.toggle('threadsDark');
  elementoTiktok.classList.toggle('tiktokDark');
  elementoTwitter.classList.toggle('twitterDark');
  elementoClassH1.classList.toggle('h1Dark');
  elementoNav.classList.toggle('navDark');
  elementoLogo.classList.toggle('logoDark');
  elementoContenedorCategorias.classList.toggle('categoriasDark');
  elementoContenedorAceites.classList.toggle('aceitesDark');
  elementoContenedorFrutosSecos.classList.toggle('frutosSecosDark');
  elementoContenedorSemillas.classList.toggle('semillasDark');
  botonLunaSwitchOff.classList.toggle('oculto');
  botonLunaSwitchOn.classList.toggle('visible');
}

botonLupaSwitchOff.addEventListener('click', verOcultarLupa);
botonLupaSwitchOn.addEventListener('click', verOcultarLupa);
botonLunaSwitchOff.addEventListener('click', modoNocturno);
botonLunaSwitchOn.addEventListener('click', modoNocturno);