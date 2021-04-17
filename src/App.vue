<template>
  <div id="app">
    <search></search>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import search from '@/components/search';


export default {
  name: 'App',
  components: {
    search
  },
  computed: mapGetters(['getSearchValue'])
}
</script>

<style>
* {
  transition: all .1s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

</style>
