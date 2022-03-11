import { ref, computed, watch } from "vue"
import { usePointerSwipe } from '@vueuse/core'
import inertia from "./inertia"
import snap from "./snap"

let swipeAdd = ref(0)
let swipeOld = ref(0)

const swipeValue = computed(() => {
  let val = swipeOld.value + swipeAdd.value
  let flooredVal = val < 0 ? 0 : val
  return flooredVal
})

function onSwipeStop() {
  swipeOld.value = swipeValue.value
  swipeAdd.value = 0
}


export function addSwipe(x = 1000) {
  swipeAdd.value += x
  console.log("triggered: ", swipeAdd.value);
}

export function swipe(el, boxSpace) {
  const { distanceX, isSwiping } = usePointerSwipe(el)

  watch(isSwiping, (swiping) => {
    swiping === false ? onSwipeStop() : null
  })

  watch(distanceX, (dragged) => {
    swipeAdd.value = dragged
  })

  const mom = inertia(swipeValue, isSwiping)
  const snapValue = snap(mom, boxSpace, isSwiping)

// watch(snapValue, (d) => {
//  console.log(d);
//})

  return {snapValue, addSwipe}
}

export default {swipe, addSwipe}