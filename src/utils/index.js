import { onMounted, ref } from "vue"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function scrollTrigger(trigger, start = "top bottom") {
  let scroll = ref(0);
  onMounted(() => {
    gsap.to(scroll, {
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: "bottom center",
        scrub: true,
        markers: false
      },
      value: 1000,
    });
  })
  return { scroll };
}

export default scrollTrigger;