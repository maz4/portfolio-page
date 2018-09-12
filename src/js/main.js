(function (portfolio) {
  'use strict';

  // Init menu
  var menuElem = document.querySelector('.nav-menu');
  if (menuElem) {
    var menu = Object.create(portfolio.Menu);
    menu.init(menuElem);
  }

  // init Menu SmoothScroll 
  var linkElem = document.querySelectorAll('.nav-menu__link');
  if (linkElem.length) {
    for (var i = 0; i < linkElem.length; i++) {
      var link = Object.create(portfolio.SmoothScroll);
      link.init(linkElem[i]);
    }
  }

  var startScrollButton = document.querySelector('.title__link');
  if(startScrollButton){
    var scrollButton = Object.create(portfolio.SmoothScroll);
    scrollButton.init(startScrollButton);
  }
}(window.portfolio || {}));