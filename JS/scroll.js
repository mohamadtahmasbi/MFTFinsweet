window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.querySelector(".header__top").style.height = "70px";
  } else {
    document.querySelector(".header__top").style.height = "92px";
  }
}
