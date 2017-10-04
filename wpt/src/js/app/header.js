import helpers from './helpers';

                                    // ==== elements ====

let nav = document.querySelector('.nav'),
    navBurg = document.querySelector('.nav-left-burg'),
    navDrop = document.querySelector('.nav_drop'),
    closeNavDrop = document.querySelector('.nav_drop-exit');

                                    // ==== functions ====
const navChange = (scrollTop) => {
    let isWhite = scrollTop >= 7;
    nav.className = isWhite ? 'nav nav-scroled' : 'nav';
}
const toggleNavDrop = (e) => {
    let toShow = e.target === navBurg ? true : false;
    navDrop.className = toShow ? 'nav_drop nav_drop-active' : 'nav_drop';
}
                                    // ==== listeners ====
helpers.listen(window,'scroll',(e) => navChange(document.documentElement.scrollTop))
helpers.listen(navBurg,'click',(e) => console.log('click'));
helpers.listen(navBurg,'click',toggleNavDrop);
helpers.listen(closeNavDrop,'click',toggleNavDrop);
