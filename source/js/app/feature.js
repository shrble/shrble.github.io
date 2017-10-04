import helpers from './helpers';

                                // elements
let phone = document.querySelector('.features_center-left'),
    mapIco   = document.querySelector('.features_bottom-rigth');
                                // functions
const animatePhoneAndMap = (scrollTop,elements) => {
    elements.forEach( item => {
        let isAnimate = scrollTop >= item.parentNode.offsetTop - 600;
        item.style.transform = isAnimate ? `translateX(0)` : window.getComputedStyle(item);
    })
}
                                // ==== listeners ====
helpers.listen(window,'scroll',(e)=>animatePhoneAndMap(document.documentElement.scrollTop, [phone,mapIco]))
