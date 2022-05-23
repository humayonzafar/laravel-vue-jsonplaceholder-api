import {ref, computed} from "vue";
import store from '@/js/stores';
import api from "../utils/api";

export const favoriteImages = () => {
    const errors = ref(null);
    const loading = ref(false);
    const getFavoriteImageIds = computed(() => store.getters['favorite_image_ids']);
    const syncUserFavoriteImage = (imageId) => {
        loading.value = true;
        try {
            api.post("/api/user/syncFavoriteImage", {image_id: imageId}).then(res => {
                console.log(res, 'res like');
                let updatedImageIds = {...getFavoriteImageIds.value};
                if (res.data.favorite) {
                    updatedImageIds[imageId] = imageId;
                } else {
                    delete updatedImageIds[imageId];
                }
                console.log(updatedImageIds, 'updatedImageIds');
                store.dispatch('sync_favorite_image_ids', updatedImageIds);
            })
        } catch (error) {
            errors.value = error.response?.data;
            console.log(error, 'inside error', error.response);
        } finally {
            loading.value = false;
        }
    }

    return {loading, errors, getFavoriteImageIds, syncUserFavoriteImage};
}

export const fetchUserFavoriteImages = () => {
    store.dispatch("get_favorite_image_ids");
}

