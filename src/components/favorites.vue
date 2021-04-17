<template>
  <div class="result">
    <h2>ULUBIONI</h2>
    <div class="items">
      <div class="item" v-for="fgif of getFavoritesGifs" :key="fgif.url">
        <img :src="fgif.image" alt="gif.id">
        <button v-on:click="removeFavoriteGif(fgif)">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: mapGetters(["getFavoritesGifs"]),
  methods: {
    ...mapActions(["removeFavoriteGif"]),
  }
}
</script>

