
<template>
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
          <router-view />
      </div>
    </div>
</template>


<script>
import fire from "./fire";
import Theatre from './components/Theatre'
export default {
  name: 'App',
  components: {
    Theatre
  },
  mounted() {
    const itemsRef = fire.database().ref("operations");
    //alert(itemsRef)
  }
};
</script>
