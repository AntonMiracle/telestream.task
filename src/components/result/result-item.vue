<template>
  <div class="item">
    <img :src="gif.image">
    <button v-on:click="addToFavorites">add</button>
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

button {
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>

