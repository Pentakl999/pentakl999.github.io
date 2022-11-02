    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          close = document.querySelector('.menu__close'),
          overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
});



// sidepanel color 
const promoscreen = document.querySelector('.promo');
$(window).scroll(function(){
    if($(window).scrollTop() > (promoscreen.clientHeight * .68)){
        $(".sidepanel__divider").css("background-color","black"),
        $(".sidepanel__text").css("color","black"),
        $("svg").css("fill","black");
    }else if($(window).scrollTop() > (promoscreen.clientHeight * .18)){
        $(".sidepanel__divider").css("background-color","#808080"),
        $(".sidepanel__text").css("color","#808080"),
        $("svg").css("fill","#808080");
    }else{
        $(".sidepanel__divider").css("background-color","white"),
        $(".sidepanel__text").css("color","white"),
        $("svg").css("fill","white");
    };
});