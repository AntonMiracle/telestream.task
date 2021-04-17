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
        setLimit(state, val) {
            state.limit = val;
        },
        setGifs(state, val) {
            state.gifs = val.map(e => {
                return {
                    id: e.id,
                    url: e.url,
                    type: e.type,
                    image: e.images.original.url,
                }
            });
        }
    },
    state: {
        searchValue: '',
        limit: 0,
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
