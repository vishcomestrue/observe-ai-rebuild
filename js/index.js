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

  // CAROUSEL SETTINGS!

  const container = document.querySelector('.fourthContainer__carousel--content-container')
  const slides = Array.from(container.children)

  const nextBtn = document.querySelector('.fourthContainer__carousel--button-right')
  const prevBtn = document.querySelector('.fourthContainer__carousel--button-left')

  const dotNavbar = document.querySelector('.fourthContainer__carousel--content-nav')
  const dots = Array.from(dotNavbar.children)



  //If previous button is pressed move one slide front. If we are in first slide move to last slide

  //If next button is pressed move one slide next. If we are in last slide move to first slide

  const setSlideDisplay = (currentSlide, targetSlide) => {
    currentSlide.classList.remove('carousel--slide-active')
    targetSlide.classList.add('carousel--slide-active')
  }

  nextBtn.addEventListener('click', e => {
    const currentSlide = container.querySelector('.carousel--slide-active')

    if(currentSlide == slides[4]) {
      const targetSlide = slides[0]
      setSlideDisplay(currentSlide, targetSlide)
    }

    else {
      const targetSlide = currentSlide.nextElementSibling
      setSlideDisplay(currentSlide, targetSlide)
    }
  })

  prevBtn.addEventListener('click', e => {
    const currentSlide = container.querySelector('.carousel--slide-active')

    if(currentSlide == slides[0]) {
      const targetSlide = slides[4]
      setSlideDisplay(currentSlide, targetSlide)
    }

    else {
      const targetSlide = currentSlide.previousElementSibling
      setSlideDisplay(currentSlide, targetSlide)
    }
  })
})