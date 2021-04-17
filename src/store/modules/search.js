export default {
    actions: {},
    mutations: {
        setSearchValue(state, val){
            state.searchValue = val;
        }
    },
    state: {
        searchValue: ''
    },
    getters: {
        getSearchValue(state) {
            return state.searchValue;
        }
    }
}
