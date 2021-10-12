'use strict';


// Make Navbar transparent when it is on the top
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

// Handle scrolling when tapping on the navbar menu
// 클릭이 되면 지정한 id의 section으로 이동

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link==null) {
        return;
    }
    scrollIntoView(link);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', (event) => {
    scrollIntoView("#contact");
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth", block: "center"});
}