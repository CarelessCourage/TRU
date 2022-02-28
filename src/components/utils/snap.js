import { watch, ref, computed } from "vue"

let magnetValue = ref(0)

function checkSnap(interval, boxSpace) {
  const next = boxSpace / 2 > interval.value
  next ? magnetValue.value -= 15 : magnetValue.value += 15

  console.log("lol: ", interval.value);

  if(!next) {requestAnimationFrame(checkSnap(interval, boxSpace))}
}

export default function snap(swipeValue, boxSpace, isSwiping) {

  const adjustedSwipe = computed(() => {
    return swipeValue.value + magnetValue.value
  })

  const interval = computed(() => {
    return Math.round(boxSpace - adjustedSwipe.value % boxSpace)
  })

  watch(isSwiping, (swiping) => {
    !swiping ? checkSnap(interval, boxSpace) : null
  })

  return adjustedSwipe
}
