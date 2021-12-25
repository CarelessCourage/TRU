
import { ref, watch } from "vue"
import { clamp, between } from "./index"

function increaseInertia(inertia) {
  let inert = inertia.value
  let cal = inert + 1
  inertia.value = clamp(cal, 0, 5);
}

function useInertia(scroll, scrollMaxValue) {
  let inertia = ref(10);
  let isBetween = ref(false);

  watch(scroll, (count) => {
    isBetween.value = between(count, 0, scrollMaxValue)
    increaseInertia(inertia)
  })

  watch(isBetween, () => {
    entropyInertia()
  })

  function entropyInertia() {
    let inert = inertia.value
    let ease = clamp(inert, 0, 3);
    inertia.value = clamp(inert - (ease * 0.1), 0, 100);
    if(!isBetween.value) return
    requestAnimationFrame(entropyInertia);
  }

  return { inertia }
}

export default useInertia