const navigationMenu = document.getElementById('nav-menu'),
      navigationToggle = document.getElementById('nav-toggle'),
      navigationClose = document.getElementById('nav-close')

if (navigationToggle) {
    navigationToggle.addEventListener('click', () => {
        navigationMenu.classList.add('show-menu')
    })
}

if (navigationClose) {
    navigationClose.addEventListener('click', () => {
        navigationMenu.classList.remove('show-menu')
    })
}

// remove mobile menu bar after click
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 