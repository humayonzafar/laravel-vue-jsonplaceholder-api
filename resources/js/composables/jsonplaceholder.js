import {computed, ref} from "vue";
import axios from "axios";
import store from "~/stores";

export const getPhotos = () => {
    const photos = ref([]);
    const isFetchingPhotos = ref(true);
    const showOnlyFavoriteImages = ref(false);
    const totalPhotosCount = ref(0);
    const favoriteImageIds = computed(() => {
        return store.getters['favorite_image_ids']
    });
    const fetchPhotos = async (start, limit, searchText = '') => {
        try {
            isFetchingPhotos.value = true;
            let url = `https://jsonplaceholder.typicode.com/photos?_page=${start}&_limit=${limit}&q=${searchText}`;
            if (showOnlyFavoriteImages.value) {
                const favoriteImageIds = store?.getters['favorite_image_ids'] == null ? [] : Object.keys(store.getters['favorite_image_ids']);
                if (favoriteImageIds.length === 0) {
                    photos.value = [];
                    return;
                }
                let favoriteImageIdsQueryString = '';
                favoriteImageIds.forEach(id => {
                    favoriteImageIdsQueryString += `id=${id}&`;
                });
                url = `https://jsonplaceholder.typicode.com/photos?q=${searchText}&${favoriteImageIdsQueryString}`;
            }
            const response = await axios.get(url);
            photos.value = response.data;
            totalPhotosCount.value = parseInt(response.headers['x-total-count']);
        } catch (error) {
            console.log(error)
        } finally {
            isFetchingPhotos.value = false;
        }
    }

    return {photos, totalPhotosCount, showOnlyFavoriteImages, fetchPhotos, isFetchingPhotos};
}

export const getJsonPlaceHolderPhotosByIds = () => {
    const images = ref([]);
    const isFetching = ref(true);
    const fetchJsonPlaceHolderPhotosByIds = async (idQueryString) => {
        try {
            isFetching.value = true;
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?${idQueryString}`);
            images.value = response;
            return response;
        } catch (error) {
            console.log(error);
        } finally {
            isFetching.value = false;
        }
    }

    return {images, fetchJsonPlaceHolderPhotosByIds};
}
