import {createStore} from "vuex";
import auth from "@/js/stores/auth.module";
import favorite from "@/js/stores/favorite.module";

const store = createStore({
    modules: {
        auth,
        favorite
    }
});

export default store;
