gsap.to("#nav",{
    backgroundColor : "#808080",
    duration : 1,
    height : "60px",

    scrollTrigger : {
        trigger : "#nav",
        scroller:"body",
        // markers : true,
        start : "top -10%",
        end : "top - 11%",
        scrub: 3
    }
})
const buttons = document.querySelectorAll("[data-carousel-button]")
    
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

gsap.from(".card",{
      scale:1,
      opacity:0,
      duration:0.2,
      scrollTrigger:{
          trigger:".card",
          scroller:"body",
          start:"top 62%",
          end:"top 60%",
          scrub:1
      }
  })
//   gsap.from(".webdesigning ",{
//     scale:1,
//     opacity:0,
//     duration:0.1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         start:"top 75%",
//         end:"top 71%",
//         scrub:1
//     }
// })