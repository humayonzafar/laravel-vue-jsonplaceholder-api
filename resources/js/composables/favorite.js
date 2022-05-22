import {ref, computed} from "vue";
import store from '~/stores';
import api from "~/utils/api";

export const favoriteImages = () => {
    const errors = ref(null);
    const loading = ref(false);
    const getFavoriteImageIds = computed(() => store.getters['favorite_image_ids']);
    const toggleFavoriteImage = async (imageId) => {
        loading.value = true;
        try {
            const response = await api.post("/api/user/toggleFavoriteImage", {image_id: imageId});
            let updatedImageIds = {...getFavoriteImageIds.value};
            if (response.data.favorite) {
                updatedImageIds[imageId] = imageId;
            } else {
                delete updatedImageIds[imageId];
            }
            store.dispatch('sync_favorite_image_ids', updatedImageIds);
        } catch (error) {
            errors.value = error.response?.data;
            console.log(error, 'inside error', error.response);
        } finally {
            loading.value = false;
        }
    }

    return {loading, errors, getFavoriteImageIds, toggleFavoriteImage};
}

export const fetchUserFavoriteImages = () => {
    store.dispatch("get_favorite_image_ids");
}
