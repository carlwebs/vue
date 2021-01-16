<template>
  <div class="hello">
    111
    <Vm></Vm>
  </div>
</template>

<script>
import Vm from './Vm.vue'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Vm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
