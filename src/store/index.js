import Vue from 'vue';
import Vuex from 'vuex';
import search from './modules/search';
import favorites from './modules/favorites';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        search,
        favorites
    }
});
