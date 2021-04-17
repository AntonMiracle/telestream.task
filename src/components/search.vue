<template>
  <div class="search">
    <span> {{ error }}</span>
    <form @submit.prevent="startSearch">
      <input type="text" v-model="searchValue" placeholder="enter word or phrase">
      <input type="number" v-model="limit">
      <button type="submit">szukaj</button>
    </form>
  </div>
</template>

<script>
import {mapMutations, mapActions} from "vuex";

export default {
  methods: {
    ...mapMutations(["setSearchValue", "setLimit"]),
    ...mapActions(["search"]),
    startSearch() {
      console.log('START SEARCH');
      if (this.searchValue.trim()) {
        this.setSearchValue(this.searchValue);
        this.setLimit(this.limit);
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
      limit: 10,
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
  border-bottom: 1px solid rgba(30, 68, 30, .2);
  margin-right: 10px;
  background-color: #E4F8DD;
}
input[type=number]{
  width: 50px;
}
input:focus {
  box-shadow: 0 1px 0 0 #1E441E;
}

input::placeholder {
  opacity: .5;
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
