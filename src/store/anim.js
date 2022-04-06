import { ref } from 'vue'

export const unwrap = ref(false)
export const velocity = ref(0)

export function setUnwrap(val) {
  unwrap.value = val
}

export function setVelocity(val) {
  velocity.value = val
}

export default unwrap