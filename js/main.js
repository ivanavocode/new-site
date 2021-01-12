const mainHref = document.getElementById("href-women");
const header = document.getElementById("header");

// mainHref.Mouseover.header.classList.add(".gray-bg");
// console.log("123");

mainHref.onmouseover = function () {
  header.classList.add("gray-bg");
};

header.onmouseleave = function () {
  header.classList.remove("gray-bg");
};

window.onscroll = () => {
  if ((pageYOffset = 200)) {
    header.classList.remove("gray-bg");
  } else if ((pageYOffset < 200)) {
    header.classList.add("gray-bg", );
  }
};
