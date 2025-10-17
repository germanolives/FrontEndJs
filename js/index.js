const elementoH1 = document.getElementById('titulo');
const elementoSearch = document.getElementById('search');
const botonLupaSwitchOff = document.getElementById('lupaToggleOff');
const botonLupaSwitchOn = document.getElementById('lupaToggleOn');
const botonLunaSwitchOff = document.getElementById('lunaToggleOff');
const botonLunaSwitchOn = document.getElementById('lunaToggleOn');
const elementoBody = document.querySelector('body');
const elementoTyc = document.querySelector('.tyc');

let verOcultarLupa = function() {
  elementoH1.classList.toggle('oculto');
  elementoSearch.classList.toggle('visible');
  botonLupaSwitchOff.classList.toggle('oculto');
  botonLupaSwitchOn.classList.toggle('visible');
}

let modoNocturno = function() {
  elementoBody.classList.toggle('dark');
  elementoTyc.classList.toggle('tycDark');
  botonLunaSwitchOff.classList.toggle('oculto');
  botonLunaSwitchOn.classList.toggle('visible');
}

botonLupaSwitchOff.addEventListener('click', verOcultarLupa);
botonLupaSwitchOn.addEventListener('click', verOcultarLupa);
botonLunaSwitchOff.addEventListener('click', modoNocturno);
botonLunaSwitchOn.addEventListener('click', modoNocturno);