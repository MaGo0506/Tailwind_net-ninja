'use strict';

const menu = document.getElementById('menu'),
    burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.add('block');
        menu.classList.remove('hidden');
     } else {
        menu.classList.add('hidden');
     }
}) 