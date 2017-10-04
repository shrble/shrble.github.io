import helpers from './helpers';

                                // ==== elements ====
let view = document.querySelector('.reviews-view'),
    rotateWidth = view.offsetWidth,
    slider = document.querySelector('.slider'),
    sliderItem = document.querySelectorAll('.slider-item'),
    startTranslate = window.getComputedStyle(slider).transform,
    controlTabs = document.querySelectorAll('.reviews-view-control_tabs-item'),
    prevBtn     = document.querySelector('.reviews-prevBtn'),
    nextBtn     = document.querySelector('.reviews-nextBtn ');
                                // ==== functions ====
const rotate = (startPage) => {
    let page = startPage;
    const isAvaiaibleRotate = (type) =>{
        if(type === 'next' && page < sliderItem.length){
            return true
        }
        else if(type === 'prev' && page > 1){
            return true
        }
        else{
            page = startPage;
            return false;
        }
    }
    const activeTab = () => {
        controlTabs.forEach( (item,id) => {
            if(id + 1 === page){
                item.className = 'reviews-view-control_tabs-item reviews-view-control_tabs-item-active';
            }
            else{
                item.className = 'reviews-view-control_tabs-item';
            }
        })
    }
    return {
        nextPage: () => {
            let toRotate = isAvaiaibleRotate('next') && page++;
            let factor = page - 1;
            activeTab();
            slider.style.transform = toRotate ? `translateX(-${rotateWidth * factor}px)` : startTranslate;
        },
        prevPage: () => {
            let toRotate = isAvaiaibleRotate('prev') && page--;
            let factor = page - 1;
            activeTab();
            slider.style.transform = toRotate ? `translateX(-${rotateWidth * factor}px)` : startTranslate;
        },
        toNeedPage: (id) => {
            page = parseInt(id);
            let factor = page - 1;
            activeTab();
            slider.style.transform = `translateX(-${rotateWidth * factor}px)`;
        }
    }
}
const sliderRotate = rotate(1);
                            // ==== listeners ====
helpers.listen(prevBtn,'click',(e) => sliderRotate.prevPage());
helpers.listen(nextBtn,'click',(e) => sliderRotate.nextPage());
helpers.listen(controlTabs,'click',(e) => {
    let id = e.target.getAttribute('data-slider-id');
    sliderRotate.toNeedPage(id);
})
