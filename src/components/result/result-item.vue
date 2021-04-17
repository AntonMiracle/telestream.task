<template>
  <div class="item">
    <img :src="gif.image" alt="gif.id">
    <div class="btns">
      <a :href="gif.url" target="_blank">url</a>
      <button v-on:click="addToFavorites">add</button>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    gif: {
      type: Object,
      require: true
    }
  },
  methods: {
    addToFavorites() {
    }
  }
}
</script>
<style scoped>
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

.btns {
  position: absolute;
  right: 5px;
  top: 5px;
}

.btns a {
  margin-right: 5px;
}
</style>

