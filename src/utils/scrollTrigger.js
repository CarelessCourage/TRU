import { onMounted, ref } from "vue"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function scrollTrigger(trigger, start = "center center") {
  let scroll = ref(0);
  onMounted(() => {
    let target = trigger.value.scrollCircle
    gsap.to(scroll, {
      scrollTrigger: {
        trigger: target,
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

export function scrollPure(trigger, value = 1100, scoped = { start: "top", end: "bottom" }) {
  let scroll = ref(0);
  onMounted(() => {
    let target = trigger.value
    console.log("target: ", target);
    gsap.to(scroll, {
      scrollTrigger: {
        trigger: target,
        start: scoped.start +  " center",
        end: scoped.end + " center",
        scrub: true,
        markers: false
      },
      value: value,
    });
  })
  return { scroll };
}

export default scrollTrigger;


