import {createStore} from "vuex";
import auth from "~/stores/auth.module";
import favorite from "~/stores/favorite.module";

const store = createStore({
    modules: {
        auth,
        favorite
    }
});

export default store;
