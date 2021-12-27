import { ref, onMounted } from "vue";

function useDirection(scroll) {
  const pathRef = ref(null);
  const pathLength = ref(null)

  onMounted(() => {
    let length = pathRef.value.pathRef.getTotalLength()
    pathLength.value = length
  });

  const forward = (text) => {
    return (scroll.value - text.offset) * text.speedFactor
  }

  const backwards = (text) => {
    return (pathLength.value + text.offset) - scroll.value * text.speedFactor
  }

  const direction = (text) => {
    return text.forward ? 
      forward(text) : 
      backwards(text);
  }

  return {
    pathRef,
    direction
  }
}

export default useDirection