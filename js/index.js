window.addEventListener('DOMContentLoaded', () => {
  
  let button = document.getElementById('cookie')
  let element = document.getElementById('cookieConsent')
  let main = document.getElementById('main')

  button.addEventListener('click', () => {
    element.classList.add('hide')
    console.log("hidden")
    main.style.marginTop = "0px"
  })
  
  let navbar = document.getElementById("navbar");

  let sticky = navbar.offsetTop;

  window.onscroll = function() {checkScroll()};

  function checkScroll() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } 
    else {
      navbar.classList.remove("sticky");
    }
  } 
})