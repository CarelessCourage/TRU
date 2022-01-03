import { reactive, ref } from "vue";

export const limbo = ref(true)
export const disabled = ref(true)

export const duration = ref(0.8);
export const innerText = ref("some text");

export const tileDims = reactive({
  width: 0,
  height: 0,
  top: 0,
  left: 0
})

export function changeDims(e, dimentions = tileDims) {
  let { width, height, left, top } = e.target ? 
    e.target.getBoundingClientRect() : 
    e.getBoundingClientRect()
  dimentions.width = width
  dimentions.height = height
  dimentions.left = left
  dimentions.top = top
}

export default changeDims