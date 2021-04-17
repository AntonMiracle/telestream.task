<template>
  <div class="result">
    <h2>WYNIK WYSZUKIWANIA</h2>
    <div v-if="getGifs.length === 0">wprowadz slowo dla wyszukiwania</div>
    <div class="items">
      <div class="item" v-for="gif of getGifs" :key="gif.id">
        <img :src="gif.image" alt="gif.id">
        <button v-on:click="saveFavoriteGif(gif)">add</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  computed: mapGetters(['getGifs']),
  methods: {
    ...mapActions(["saveFavoriteGif"]),
  }
}
</script>
