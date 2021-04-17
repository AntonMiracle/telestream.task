<template>
  <div id="app">
    <search></search>
    <result></result>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import search from '@/components/search';
import result from "@/components/result/result";


export default {
  name: 'App',
  components: {
    result,
    search
  },
  computed: mapGetters(['getSearchValue'])
}
</script>

<style>

* {
  transition: all .1s;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
  background-color: #E4F8DD;
}

button {
  outline: none;
  border: 1px solid #152614;
  padding: 5px 15px;
  width: var(--m-width);
  background-color: #A0E788;
  color: #152614;
  letter-spacing: 1px;
  font-size: .9em;
  text-transform: uppercase;
  font-weight: 400;
}

button:hover {
  background-color: #119822;
  color: #A0E788;
}

button:active {
  background-color: #2c3e50;
  color: azure;
}
</style>
