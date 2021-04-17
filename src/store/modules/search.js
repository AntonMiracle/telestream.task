export default {
    actions: {
        async search({commit, state}) {
            const url = `http://api.giphy.com/v1/gifs/search?api_key=${state.apiKey}&q=${state.searchValue}&limit=${state.limit}`;
            const res = await fetch(url);
            const gifs = await res.json();
            commit('setGifs', gifs.data)
        }
    },
    mutations: {
        setSearchValue(state, val) {
            state.searchValue = val;
        },
        setGifs(state, val) {
            state.gifs = val;
        }
    },
    state: {
        searchValue: '',
        limit: 10,
        apiKey: "HqAvKVtqkWGQusQ4RQzCOoRoaMsDjG3O",
        gifs: []
    },
    getters: {
        getSearchValue(state) {
            return state.searchValue;
        },
        getGifs(state) {
            return state.gifs;
        }
    }
}
