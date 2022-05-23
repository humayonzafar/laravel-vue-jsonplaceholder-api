import api from "../utils/api";

export const state = {
    user: JSON.parse(localStorage.getItem('user')) || null,
};

export const actions = {
    ['set_user'](context, user) {
        context.commit('updateUser', user);
    },
    ['get_auth_user'](context) {
       return api.get('api/user/auth')
            .then((response) => {
                console.log(response.data);
                context.commit('updateUser', response.data.user);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                return response
            })
            .catch((error) => {
                context.commit('updateUser', null);
                return error
            })
    },
    ['logout'](context) {
        return api.post('/logout')
            .then((response) => {
                console.log(response,'logout response');
                context.commit('logoutUser');
            })
            .catch((error) => {})
    },
};

export const mutations = {
    updateUser: (state, user) => {
        state.user = user;
    },
    logoutUser: (state) => {
        state.user = null;
        localStorage.removeItem('user');
    }
};

export const getters = {
    ['user'](state) {
        return state.user
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
