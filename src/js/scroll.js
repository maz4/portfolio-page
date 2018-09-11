(function (window) {
  'use strict';

  window.portfolio = window.portfolio || {};

  window.portfolio.SmoothScroll = {
    init: function (linkElem) {
      this.linkElem = linkElem;
      this.targetId = this.linkElem.getAttribute('href');
      this.target = document.querySelector(this.targetId);
      this.targetPosition = this.target.getBoundingClientRect().top;
      this.startPosition = window.pageYOffset;
      this.distance = this.targetPosition - this.startPosition;
      this.startTime = null;
      this.duration = 1000;
      this.menuLink();
    },

    srcollSetup: function(){
      this.startPosition = window.pageYOffset;
      this.distance = this.targetPosition - this.startPosition;
      this.startTime = null;
    },

    ease: function (timeE, startP, dist, durat) {
      timeE /= durat / 2;
      if (timeE < 1) return dist / 2 * timeE * timeE + startP;
      timeE--;
      return -dist / 2 * (timeE * (timeE - 2) - 1) + startP;
    },

    animation: function (currentTime) {
      if (this.startTime === null) this.startTime = currentTime;
      var timeElapsed = currentTime - this.startTime;
      var run = this.ease(timeElapsed, this.startPosition, this.distance, this.duration);
      window.scrollTo(0, run);
      if (timeElapsed < this.duration) requestAnimationFrame(this.animation.bind(this));
    },

    menuLink: function () {
      this.linkElem.addEventListener('click', this.onClick.bind(this));
    },

    onClick: function () {
      console.log(this.startPosition, this.targetPosition);
      event.preventDefault();
      this.srcollSetup();
      console.log(this.startPosition, this.targetPosition);
      requestAnimationFrame(this.animation.bind(this));
    }
  }
}(window));