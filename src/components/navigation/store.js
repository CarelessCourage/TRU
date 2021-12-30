import { ref } from 'vue'
const navigation = ref(false)

function useNavigation() {

  function setNav(value) {
    navigation.value = value
  }

  return {
    setNav,
    navigation
  }
}

export default useNavigation