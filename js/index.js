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

  const setDotDisplay = (currentDot, targetDot) => {
    currentDot.classList.remove('carousel__active')
    targetDot.classList.add('carousel__active')
  }

  nextBtn.addEventListener('click', e => {
    const currentSlide = container.querySelector('.carousel--slide-active')
    const currentDot = dotNavbar.querySelector('.carousel__active')

    if(currentSlide === slides[4]) {
      const targetSlide = slides[0]
      setSlideDisplay(currentSlide, targetSlide)
      
      const targetDot = dots[0]
      setDotDisplay(currentDot, targetDot)
    }

    else {
      const targetSlide = currentSlide.nextElementSibling
      setSlideDisplay(currentSlide, targetSlide)

      const indexOfSlide = (slide) => slide === targetSlide
      const targetIndex = slides.findIndex(indexOfSlide)
      const targetDot = dots[targetIndex]
      setDotDisplay(currentDot, targetDot)
    }
  })

  prevBtn.addEventListener('click', e => {
    const currentSlide = container.querySelector('.carousel--slide-active')
    const currentDot = dotNavbar.querySelector('.carousel__active')

    if(currentSlide === slides[0]) {
      const targetSlide = slides[4]
      setSlideDisplay(currentSlide, targetSlide)

      const targetDot = dots[4]
      setDotDisplay(currentDot, targetDot)
    }

    else {
      const targetSlide = currentSlide.previousElementSibling
      setSlideDisplay(currentSlide, targetSlide)
      
      const indexOfSlide = (slide) => slide === targetSlide
      const targetIndex = slides.findIndex(indexOfSlide)
      const targetDot = dots[targetIndex]
      setDotDisplay(currentDot, targetDot)
    }
  })

  dotNavbar.addEventListener('click', e => {
    const targetDot = e.target.closest('button')

    if(!targetDot) return;

    const currentSlide = container.querySelector('.carousel--slide-active')
    const currentDot = dotNavbar.querySelector('.carousel__active')


    const indexOfDot = (dot) => dot === targetDot
    const targetIndex = dots.findIndex(indexOfDot)
    const targetSlide = slides[targetIndex]

    setSlideDisplay(currentSlide, targetSlide)
    setDotDisplay(currentDot, targetDot)
  })
})