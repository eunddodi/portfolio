'use strict';

const navbar = document.querySelector('#navbar'); 
const navbarHeight = navbar.getBoundingClientRect().height;
// query selector를 사용해서 가져온 navbar 엘리먼트 
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark')
    } else {
        navbar.classList.remove('navbar--dark')
    }
});