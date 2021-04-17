<template>
  <div class="result">
    <div class="item" v-for="gif of getGifs" :key="gif.id">
      <img :src="gif.image" alt="gif.id">
      <button v-on:click="addToFavorites(gif)">add</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  computed: mapGetters(['getGifs']),
  methods: {
    ...mapMutations(["saveFavoriteGif"]),
    addToFavorites(gif) {
      this.saveFavoriteGif(gif);
    }
  }
}
</script>

<style scoped>
.result {
  width: 100%;
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

.item:hover {
  background-color: #D7F5CC;
  border-color: #72DC50;
}

img {
  max-width: 200px;
  max-height: 200px;
  border-radius: 5px;
}

button {
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>
