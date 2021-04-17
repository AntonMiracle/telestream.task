<template>
  <div class="search">
    <span> {{ error }}</span>
    <form @submit.prevent="startSearch">
      <input type="text" v-model="searchValue" placeholder="enter word or phrase">
      <button type="submit">szukaj</button>
    </form>
  </div>
</template>

<script>
import {mapMutations, mapActions} from "vuex";

export default {
  methods: {
    ...mapMutations(["setSearchValue"]),
    ...mapActions(["search"]),
    startSearch() {
      console.log('START SEARCH');
      if (this.searchValue.trim()) {
        this.setSearchValue(this.searchValue);
        this.search();
        this.searchValue = this.error = '';
      } else {
        this.error = "can not be empty";
      }
    }
  },
  data() {
    return {
      searchValue: '',
      error: ''
    }
  }
}
</script>

<style scoped>
:root {
  --m-width: 45px
}

.search {
  padding: 15px 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

span {
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: .8em;
}

input {
  outline: none;
  padding: 5px 10px;
  width: var(--m-width);
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  margin-right: 10px;
}

input:focus {
  box-shadow: 0 1px 0 0 darkslategrey;
}

input::placeholder {
  opacity: .5;
}

button {
  outline: none;
  border: 1px solid #2c3e50;
  padding: 5px 15px;
  width: var(--m-width);
  background-color: azure;
}
button:hover{
  background-color: aqua;
}
button:active {
  background-color: #2c3e50;
  color: azure;
}
</style>
