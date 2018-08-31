(function(portfolio){
  'use strict';
  
  var menuElem = document.querySelector('.nav-menu');
  if(menuElem){
    var menu = Object.create(portfolio.Menu);
    menu.init(menuElem);
  }

}(window.portfolio || {}));