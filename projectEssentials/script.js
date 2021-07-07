window.onscroll = function () {
  if (window.pageYOffset >= 100) {
    document.querySelector(".header").style.backgroundColor = "rgb(41, 40, 40";
  } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
  }
};
