var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

var toCart = document.querySelector(".to-cart");
var btnOrder = document.querySelector(".btn--order");
var overlay = document.querySelector(".overlay");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

btnOrder.addEventListener("click", function(event) {
  event.preventDefault();
  toCart.classList.add("to-cart--opened");
  overlay.classList.add("overlay--opened");
});

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (toCart.classList.contains("to-cart--opened")) {
            toCart.classList.remove("to-cart--opened");
            overlay.classList.remove("overlay--opened");
          }
        }
      });
