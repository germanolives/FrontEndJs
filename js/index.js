const elementoH1 = document.getElementById('titulo');
const elementoSearch = document.getElementById('search');
const botonSwitchOff = document.getElementById('toggleOff');
const botonSwitchOn = document.getElementById('toggleOn');

botonSwitchOff.addEventListener('click', function() {
  elementoH1.classList.toggle('oculto');
  elementoSearch.classList.toggle('visible');
  botonSwitchOff.classList.toggle('oculto');
  botonSwitchOn.classList.toggle('visible');
});

botonSwitchOn.addEventListener('click', function() {
  elementoH1.classList.toggle('oculto');
  elementoSearch.classList.toggle('visible');
  botonSwitchOff.classList.toggle('oculto');
  botonSwitchOn.classList.toggle('visible');
});