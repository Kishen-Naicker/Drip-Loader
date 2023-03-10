import gsap from "gsap";
import imagesLoaded from "imagesloaded";

const content = document.querySelector('section')

//get all the images
const imgLoad = imagesLoaded(content)

imgLoad.on('done', instance => {
  const tl = gsap.timeline();

  tl
    .to('svg', {
      scale: 0.9
    })
    .to(['.blinder-top', '.blinder-bottom'], {
      scaleY: 0,
      stagger: 0.07,
      ease: 'power3.out'
    })
    .to(['h1', 'p'], {
      y: 0,
      stagger: .2,
      duration: 2, 
      ease: 'power4.out'
    }, 0.5)
})