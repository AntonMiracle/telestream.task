<template>
  <div id="app">
    <search></search>
    <result></result>
    <favorites></favorites>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import search from '@/components/search';
import result from "@/components/result";
import favorites from "@/components/favorites";


export default {
  name: 'App',
  components: {
    result,
    search,
    favorites
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

.result {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding-bottom: 50px;
}

.items {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}

.item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 220px;
  height: 220px;
  border: 1px solid rgba(0, 0, 0, 0);
}

.item img {
  max-width: 200px;
  max-height: 200px;
  border-radius: 5px;
}

.item:hover {
  background-color: #D7F5CC;
  border-color: #72DC50;
}

.item button {
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>
