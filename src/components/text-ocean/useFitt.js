import fitty from "fitty";
import { onMounted } from "vue";

function useFitt(id) {
  onMounted(() => {
    var fitties = fitty(id, { minSize: 2});
    console.log(fitties);
    function refresh() {
      fitties.forEach(fitty => fitty.fit());
      requestAnimationFrame(refresh)
    }
    refresh();
  });
}

export default useFitt;