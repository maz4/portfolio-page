(function (window) {
  'use strict';

  window.portfolio = window.portfolio || {};

  window.portfolio.SmoothScroll = {
    init: function (linkElem) {
      this.linkElem = linkElem;
      this.targetId = this.linkElem.getAttribute('href');
      this.target = document.querySelector(this.targetId);
      this.targetPosition = this.target.getBoundingClientRect().top;
      this.duration = 1000;
      this.setEvents();
    },

    ease: function (timeE, startP, dist, durat) {
      timeE /= durat / 2;
      if (timeE < 1) {
        return dist / 2 * timeE * timeE + startP;
      }
      timeE--;
      return -dist / 2 * (timeE * (timeE - 2) - 1) + startP;
    },

    animate: function (currentTime) {
      if (this.startTime === null) {
        this.startTime = currentTime;
      }
      
      var timeElapsed = currentTime - this.startTime;
      var run = this.ease(timeElapsed, this.startPosition, this.distance, this.duration);
      window.scrollTo(0, run);

      if (timeElapsed < this.duration) {
        requestAnimationFrame(this.animate.bind(this));
      }
    },

    setEvents: function () {
      this.linkElem.addEventListener('click', this.onClick.bind(this));
    },

    onClick: function (event) {
      event.preventDefault();
      this.startPosition = window.pageYOffset;
      this.distance = this.targetPosition - this.startPosition;
      this.startTime = null;
      requestAnimationFrame(this.animate.bind(this));
    }
  }
}(window));