'use strict';

const espera = document.querySelector('.loader');
const botonMenu = document.getElementsByClassName('menu')[0]
const navSecMob = document.getElementsByClassName('nav-sec-mob')[0]

window.addEventListener('load', () => {
    espera.classList.add('hide');
});

botonMenu.addEventListener('click', () => {
    navSecMob.classList.toggle('active')
})