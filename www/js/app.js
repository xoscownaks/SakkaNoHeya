// This is a JavaScript file

/****************************************
 사이드 메뉴 클릭시 페이지 이동 정의 
 * *************************************/
    window.fn = {};
    
    window.fn.open = function() {
      var menu = document.getElementById('menu');
      menu.open();
    };
    
    window.fn.load = function(page) {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content.load(page)
        .then(menu.close.bind(menu));
    };

/***************************************/

/******************************************
 * 상단 슬라이드 메뉴 부분 
 * ****************************************/
$(document).ready(function(){
    $('.slider1').bxSlider({
    slideWidth: 200,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 10
  });
})

  
  
/*************************************************/
