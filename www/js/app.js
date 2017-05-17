// This is a JavaScript file

/****************************************
 사이드 메뉴 클릭 정의 
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
    ons.ready(function() {
      var carousel = document.addEventListener('postchange', function(event) {
        console.log('Changed to ' + event.activeIndex)
      });
    });
    
    var next = function(){
        var carousel = document.getElementById('carousel');
        carousel.next();
    };
    
    
    
    var myIndex = 0;
    carousel();
    
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

/*************************************************/
