import helpers from './helpers';

let swiper = document.querySelector('.price-controls_text-select-swiper'),
    act    = document.querySelector('.price-controls_text-select-item_act'),
    item   = document.querySelectorAll('.price-controls_text-select-item'),
    select = document.querySelector('.price-controls_text-select'),
    indiv  = document.querySelector('.plans-indiv'),
    company= document.querySelector('.plans-company');


  helpers.listen(select, 'click', e=>{
    if(e.target === item[1]){
      swiper.className  = 'price-controls_text-select-swiper price-controls_text-select-swiper_right';
      item[1].className = 'price-controls_text-select-item price-controls_text-select-item_act';
      item[0].className = 'price-controls_text-select-item';
      company.className = 'price-plans plans-company plans-act';
      indiv.className   = 'price-plans plans-indiv';
  
    }else{
      swiper.className = 'price-controls_text-select-swiper';
      item[0].className = 'price-controls_text-select-item price-controls_text-select-item_act'
      item[1].className = 'price-controls_text-select-item';
      company.className = 'price-plans plans-company';
      indiv.className   = 'price-plans plans-indiv plans-act';
    }


  })
