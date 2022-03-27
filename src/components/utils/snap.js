import { watch, ref, computed } from "vue"

let magnetValue = ref(0)
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export default function snap(swipeValue, boxSpace, isSwiping) {
  let boxCenter = boxSpace

  const adjustedSwipe = computed(() => {
    return swipeValue.value + magnetValue.value
  })

  const interval = computed(() => {
    return Math.round(boxSpace - adjustedSwipe.value % boxSpace)
  })

  watch(isSwiping, (swiping) => {
    !swiping ? setInterval(checkSnap, 1000) : null
  })

  function checkSnap() {
    const target = boxCenter - interval.value
    const next = target > 0
    let speed = clamp(0.2 * Math.abs(target), 0.2, 2)
    const margin = Math.abs(target) < 1
    
    if(!isSwiping.value) {
      if(margin) {
        return
      } else {
        next ? 
          magnetValue.value -= speed :
          magnetValue.value += speed
        requestAnimationFrame(checkSnap)
      }
    }
  }

  return adjustedSwipe
}
