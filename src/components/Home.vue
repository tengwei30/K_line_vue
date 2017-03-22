<template>
 <keep-alive>
 <K_line_index></K_line_index>
 </keep-alive>
</template>
<script>
import K_line_index from './K_line_index'
export default {
  name: 'Home',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { K_line_index }
}
</script>
<style scoped>
</style>
