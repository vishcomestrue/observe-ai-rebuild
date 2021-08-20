window.addEventListener('DOMContentLoaded', () => {
  let products = document.getElementById('products')
  let resources = document.getElementById('resources')
  let company = document.getElementById('company')

  window.onscroll = function() {checkScroll()};

  let navbar = document.getElementById("navbar");

  let sticky = navbar.offsetTop;

  function checkScroll() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } 
    else {
      navbar.classList.remove("sticky");
    }
  } 
})