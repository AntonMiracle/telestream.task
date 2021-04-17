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

</style>
