var headerInput = $('.header__input');
headerInput.on('focus',()=>{
    headerInput.css({'border-bottom':'2px solid rgb(66, 66, 66)'})
    headerInput.attr('placeholder','');
})
headerInput.on('blur',()=>{
    headerInput.css({'border-bottom':'2px solid rgb(203, 203, 203)'});
    headerInput.attr('placeholder','write TODO');
})
