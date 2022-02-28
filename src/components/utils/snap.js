import { watch, ref, computed } from "vue"

let magnetValue = ref(0)

export default function snap(swipeValue, boxSpace, isSwiping) {

  const adjustedSwipe = computed(() => {
    return swipeValue.value + magnetValue.value
  })

  const interval = computed(() => {
    return Math.round(boxSpace - adjustedSwipe.value % boxSpace)
  })

  watch(isSwiping, (swiping) => {
    !swiping ? checkSnap() : null
  })

  function checkSnap() {
    const next = boxSpace / 2 > interval.value
    next ? magnetValue.value -= 0.5 : magnetValue.value += 0.5
    if(interval.value !== 0) {requestAnimationFrame(checkSnap)}
  }

  return adjustedSwipe
}
