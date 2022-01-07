import { onMounted, ref } from "vue"
import { duration } from "../components/tiles/utils.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function scrollReset() {
  onMounted(() => {
    gsap.to(window, {duration: 0, scrollTo: "0"});
    setTimeout(() => {
      gsap.to(window, {duration: 1, scrollTo: "400"});
    }, duration.value * 500)
  })
}

export function scrollPure(trigger, value = 1100, scoped = { start: "top", end: "bottom" }) {
  let scroll = ref(0);
  onMounted(() => {
    let target = trigger.value
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

export default scrollPure;


