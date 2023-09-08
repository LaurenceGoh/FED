"use strict";

// typewriter animation taken from https://css-tricks.com/snippets/css/typewriter-effect/
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// When animation is on view
// taken from https://stackoverflow.com/questions/66003295/how-to-trigger-animation-when-element-is-in-view

document.addEventListener("DOMContentLoaded", function (event) {
  function callback(observations, observer) {
    observations.forEach((observation) => {
      if (observation.isIntersecting) {
        //IF IT'S IN VIEW
        observation.target.classList.add("tracking-in-expand");
      } else {
        observation.target.classList.remove("tracking-in-expand");
      }
    });
  }

  // CREATE AN INTERSECTION OBSERVER
  let options = {
    root: null, //null means it will observe on the viewport
    rootMargin: "0px",
    threshold: 1.0, //1 means the whole element needs to be viewable before we animate it
  };

  let observer = new IntersectionObserver(callback, options);

  // NOW PUT THE OBSERVER ON EACH OF THE ELEMENTS WE WANT TO ANIMATE WHEN IT'S IN VIEW
  let spans = document.querySelectorAll(".doing");
  for (let i = 0; i < spans.length; i++) {
    observer.observe(spans[i]);
  }
});

// Flicker animates on view
document.addEventListener("DOMContentLoaded", function (event) {
  // THIS FUNCTION GETS CALLED WHENEVER A SPAN18 ELEMENT (OR ELEMENTS) COME INTO OR GO OUT OF VIEW
  function callback(observations, observer) {
    observations.forEach((observation) => {
      if (observation.isIntersecting) {
        //IF IT'S IN VIEW
        observation.target.classList.add("text-flicker-in-glow");
      } else {
        observation.target.classList.remove("text-flicker-in-glow");
      }
    });
  }

  // CREATE AN INTERSECTION OBSERVER
  let options = {
    root: null, //null means it will observe on the viewport
    rootMargin: "0px",
    threshold: 1.0, //1 means the whole element needs to be viewable before we animate it
  };

  let observer = new IntersectionObserver(callback, options);

  // NOW PUT THE OBSERVER ON EACH OF THE ELEMENTS WE WANT TO ANIMATE WHEN IT'S IN VIEW
  let spans = document.querySelectorAll(".games");
  for (let i = 0; i < spans.length; i++) {
    observer.observe(spans[i]);
  }
});

// Focus in animates on view
document.addEventListener("DOMContentLoaded", function (event) {
  // THIS FUNCTION GETS CALLED WHENEVER A SPAN18 ELEMENT (OR ELEMENTS) COME INTO OR GO OUT OF VIEW
  function callback(observations, observer) {
    observations.forEach((observation) => {
      if (observation.isIntersecting) {
        //IF IT'S IN VIEW
        observation.target.classList.add("text-focus-in");
      } else {
        observation.target.classList.remove("text-focus-in");
      }
    });
  }

  // CREATE AN INTERSECTION OBSERVER
  let options = {
    root: null, //null means it will observe on the viewport
    rootMargin: "0px",
    threshold: 1.0, //1 means the whole element needs to be viewable before we animate it
  };

  let observer = new IntersectionObserver(callback, options);

  // NOW PUT THE OBSERVER ON EACH OF THE ELEMENTS WE WANT TO ANIMATE WHEN IT'S IN VIEW
  let spans = document.querySelectorAll(".infotext");
  for (let i = 0; i < spans.length; i++) {
    observer.observe(spans[i]);
  }
});
