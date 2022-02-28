import { watch, ref, computed } from "vue"

let friction = 0.99;
let velocity = ref(0)
let momentum = ref(0)

function slide() {
  velocity.value *= friction
  fizzle(slide)
}

function fizzle(fn = slide) {
  let condition = velocity.value > 0 ? 
    velocity.value > 0.02 : 
    velocity.value < -0.02
  condition ? requestAnimationFrame(fn) : null
}

export default function getInertia(swipeValue, isSwiping) {
  watch(swipeValue, (newValue, oldValue) => {
    velocity.value = newValue - oldValue
  })

  watch(isSwiping, (swiping) => {
    !swiping ? slide() : null
  })

  watch(velocity, (newValue) => {
    !isSwiping.value ? momentum.value += newValue : null;
  })

  const conservedMomentum = computed(() => {
    return swipeValue.value + momentum.value
  })

  return conservedMomentum
}