document.addEventListener("DOMContentLoaded", function () {

  // Getting DOM elements
  let hamburger = document.querySelector(".hamburger");
  let navList = document.querySelector(".nav-list");
  
   // Add click event listener to the hamburger menu
  hamburger.addEventListener("click", function () {
    // Toggle the 'active' class on the navigation list
    navList.classList.toggle("active");
  });
});
