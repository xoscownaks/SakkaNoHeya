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