(function (portfolio) {
  'use strict';

  var menuElem = document.querySelector('.nav-menu');
  if (menuElem) {
    var menu = Object.create(portfolio.Menu);
    menu.init(menuElem);
  }

  var linkElem = document.querySelectorAll('.nav-menu-link');
  if (linkElem.length) {
    for (var i = 0; i < linkElem.length; i++) {
      var link = Object.create(portfolio.SmoothScroll);
      link.init(linkElem[i]);
    }
  }
}(window.portfolio || {}));