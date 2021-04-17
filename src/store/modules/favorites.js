export default {
    actions: {
        saveFavoriteGif({state}, val) {
            if (val && state.fGifs.filter(e => e.id === val.id).length === 0) {
                state.fGifs.push(val);
                console.log(state.fGifs)
                localStorage.setItem(state.key, JSON.stringify(state.fGifs));
            }
        },
        removeFavoriteGif({state}, val) {
            if (val) {
                state.fGifs = state.fGifs.filter(e => e.id !== val.id);
                localStorage.setItem(state.key, JSON.stringify(state.fGifs));
            }
        },
    },
    mutations: {},
    state: {
        fGifs: [],
        key: 'fGifs'
    },
    getters: {
        getFavoritesGifs(state) {
            state.fGifs = [];
            let fGifsString = localStorage.getItem(state.key);
            if (fGifsString) {
                let json = JSON.parse(fGifsString);
                for (let ele of json) {
                    state.fGifs.push({
                        id: ele.id,
                        url: ele.url,
                        image: ele.image
                    });
                }
                console.log(state.fGifs);
            }
            return state.fGifs;
        }
    }

}
