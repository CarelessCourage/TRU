import { gsap } from "gsap";

function animation(boxSpace, wrapWidth) {
  var mod = gsap.utils.wrap(0, wrapWidth);
  
  gsap.set('.boxes',{x:-boxSpace})
  gsap.set(".box", {
    x: (i) => i * boxSpace
  })

  let gsap_anim = gsap.to(".box", {
    x: "-=" + wrapWidth,
    duration: 15, ease: "none",
    paused: true,
    repeat: -1,
    modifiers: {
      x: x => mod(parseFloat(x)) + "px"
    },
  });

  return gsap_anim;
}

export default animation