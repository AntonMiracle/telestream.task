<template>
  <div class="result">
    <result-item v-for="gif of getGifs" v-bind:gif="gif" :key="gif.id"></result-item>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import resultItem from "@/components/result/result-item";

export default {
  components: {resultItem},
  computed: mapGetters(['getGifs']),
}
</script>

<style>
.result {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
