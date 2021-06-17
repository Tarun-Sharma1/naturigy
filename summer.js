'use strict';

const nav = document.querySelector('nav');
const menu = document.querySelector('.hamburger');

menu.addEventListener('click',function() {
  nav.classList.toggle('active');
})