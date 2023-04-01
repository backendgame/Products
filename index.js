window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("shadow", window.scrollY > 0);
  });