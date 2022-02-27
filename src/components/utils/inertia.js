import { ref, computed, watch } from "vue"

let adder = ref(0)

let swipeAdd = ref(0)
let swipeOld = ref(0)

const swipeNew = computed(() => {
  let val = swipeOld.value + swipeAdd.value
  let flooredVal = val < 0 ? 0 : val
  //console.log(swipeSnap.value);
  return flooredVal
})

/*const swipeSnap = computed(() => {
  return Math.round(boxSpace - swipeNew.value % boxSpace)
})*/

function setSwipeValue() {
  swipeOld.value = swipeNew.value
  swipeAdd.value = 0
}

let FRICTION_COEF = 0.99;
let velocity = ref(0)
watch(swipeNew, (val, old) => {
  velocity.value = val - old
})

function swipeInertia() {
  if(velocity.value > 0.1) {
    requestAnimationFrame( swipeInertia );
  }
  adder.value += velocity.value / 6;
  velocity.value *= FRICTION_COEF;
  adder.value *= FRICTION_COEF;
}

export const adderNew = computed(() => {
  let val = swipeNew.value
  return val + adder.value
})

function inertia(distanceX, isSwiping) {

  watch(isSwiping, (val) => {
    if (!val) {
      setSwipeValue()
      swipeInertia()
    } else {
      adder.value = 0
    }
  })

  watch(distanceX, (newValue) => {
    swipeAdd.value = newValue
  })

  return adderNew
}

export default inertia