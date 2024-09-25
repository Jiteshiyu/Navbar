document.addEventListener("DOMContentLoaded", function () {
  let hamburger = document.querySelector(".hamburger");
  let navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});
