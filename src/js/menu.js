(function(window){
  'use strict';

  window.portfolio = window.portfolio || {};

  window.portfolio.Menu = {
    init: function(elem){
      this.elem = elem;
      this.button = this.elem.querySelector('.nav-menu__toggle');
      this.elem.classList.add('nav-menu--close')
      this.toggleMenu();
    },

    toggleMenu: function(){
      this.button.addEventListener('click', this.onButtonClick.bind(this));
    },

    onButtonClick: function(){
      event.preventDefault();
      this.elem.classList.toggle('nav-menu--close');
    }
  }
}(window));