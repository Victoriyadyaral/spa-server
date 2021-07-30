const refs = {
    siteNavigation: document.querySelector('.page-header__navigation'),
    navLinks: document.querySelectorAll('.header-link'),
    header:  document.querySelector('.header'),
};


refs.siteNavigation.addEventListener('click', onHeaderLinkClick);

function onHeaderLinkClick(event) {
    if (event.target.classList.contains('header-link')) {
        if (event.target.getAttribute('href') === '/home') {
            clearCurrentLinks()
            refs.navLinks[1].classList.add('site-nav__link--current');
        } else if (event.target.getAttribute('href') === '/library') {
            clearCurrentLinks()
            refs.navLinks[2].classList.add('site-nav__link--current');
            refs.header.classList.remove('header-home');
            refs.header.classList.add('header-library');
        } 
    }
}

function clearCurrentLinks() {
    refs.navLinks.forEach((link) => {
    link.classList.remove('site-nav__link--current');
    })
}