'use strict';

// ////////////////////////////// Variables //////////////////////////////

const espera = document.querySelector('.loader');
const botonMenu = document.getElementsByClassName('menu')[0];
const navSecMob = document.getElementsByClassName('nav-sec-mob')[0];
let page = document.querySelectorAll('section')[0];

// ////////////////////////////// Funciones //////////////////////////////

function place(products){
    console.log('> Placing...');

    for (let i in products){
        let sec = document.getElementsByClassName(i)[0];
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.innerHTML = '<h2>' + i + '</h2>';
        ul.appendChild(li);
        sec.appendChild(ul);
        for (let j in products[i]){
            li = document.createElement('li');
            if (products[i][j].brand != 'NA'){
                li.innerHTML = j + ':<p class="brand-font">' + products[i][j].brand +'.</p>';
            } else {
                li.innerText = j + '.';
            }
            ul.appendChild(li);
        }
    }
}

// ////////////////////////////// Main //////////////////////////////

console.log("> Running...");

if (page.className === 'catalog'){
    let prod = fetch('mater.json')
    .then(datos => datos.json())
    .then(datos => {
        prod = datos;
        place(prod);
    })
}

window.addEventListener('load', () => {
    espera.classList.add('hide');
});

botonMenu.addEventListener('click', () => {
    navSecMob.classList.toggle('active')
})