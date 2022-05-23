import api from "../utils/api";

export const state = {
    favoriteImageIds: {},
};

export const actions = {
    ['get_favorite_image_ids'](context) {
        return api.get('api/user/getFavoritesImageIds')
            .then((response) => {
                const arrayValuesToObjectKeys = response.data.favorites.reduce((favorites, favorite) => {
                    favorites[favorite] = favorite;
                    return favorites;
                }, {});
                context.commit('updateFavoriteImageIds', arrayValuesToObjectKeys);
                console.log(response.data.favorites);
            })
            .catch((error) => {
                context.commit('updateFavoriteImageIds', {});
                return error
            })
    },
    ['sync_favorite_image_ids'](context, favoriteImageIds) {
        console.log(favoriteImageIds,'favoriteImageIds store');
        context.commit('updateFavoriteImageIds', favoriteImageIds);
    },
};

export const mutations = {
    updateFavoriteImageIds: (state, favoriteImageIds) => {
        state.favoriteImageIds = favoriteImageIds;
    }
};

export const getters = {
    ['favorite_image_ids'](state) {
        return state.favoriteImageIds;
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};
