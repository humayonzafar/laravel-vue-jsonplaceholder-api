import api from "~/utils/api";

export const state = {
    favoriteImageIds: {},
};

export const actions = {
    ['get_favorite_image_ids'](context) {
        api.get('api/user/getFavoritesImageIds')
            .then((response) => {
                const arrayValuesToObjectKeys = response.data.favorite_image_ids.reduce((favorites, favorite) => {
                    favorites[favorite.image_id] = favorite.image_id;
                    return favorites;
                }, {}) ?? {};
                context.commit('updateFavoriteImageIds', arrayValuesToObjectKeys);
            })
            .catch((error) => {
                context.commit('updateFavoriteImageIds', {});
                return error
            })
    },
    ['sync_favorite_image_ids'](context, favoriteImageIds) {
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
