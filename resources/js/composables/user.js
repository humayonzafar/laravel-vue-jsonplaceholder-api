import {ref} from "vue";
import {getJsonPlaceHolderPhotosByIds} from "./jsonplaceholder";
import api from "~/utils/api";

export const usersWithMostLikedImagesCurrentWeek = () => {
    const metaData = ref(null);
    const users = ref([]);
    const errors = ref(null);
    const loading = ref(false);
    const getUsersWithMostLikedImagesCurrentWeek = async (page = 1) => {
        try {
            loading.value = true;
            const response = await api.get(`/api/getUsersWithMostLikedImagesCurrentWeek?page=${page}`);
            metaData.value = response.data.users.pagination;
            users.value = response.data.users.data.map(user => {
                return {
                    'name': user.name,
                    'email': user.email,
                    'likes': user.favorites_images_count_current_week
                }
            });
        } catch (error) {
            errors.value = error.response?.data;
        } finally {
            loading.value = false;
        }
    }

    return {loading, errors, getUsersWithMostLikedImagesCurrentWeek, metaData, users};
}

export const latestFavoriteImages = () => {
    const metaData = ref(null);
    const {fetchJsonPlaceHolderPhotosByIds} = getJsonPlaceHolderPhotosByIds();
    const images = ref([]);
    let favoriteImageIdsQueryString = '';
    const errors = ref(null);
    const fetching = ref(false);
    const alreadyAddedIdsToString = new Set(); /*remove duplicates from query string*/
    const getLatestFavoriteImages = async (page = 1) => {
        fetching.value = true;
        try {
            const response = await api.get(`/api/latestFavoriteImages?page=${page}`);
            metaData.value = response.data.latest_favorite_images.pagination;
            response.data.latest_favorite_images.data.forEach(image => {
                if(!alreadyAddedIdsToString.has(image.image_id)){
                    favoriteImageIdsQueryString += `id=${image.image_id}&`;
                }
                alreadyAddedIdsToString.add(image.image_id);
            });
            const jsonPlaceholderImagesResponse = await fetchJsonPlaceHolderPhotosByIds(favoriteImageIdsQueryString);
            images.value = jsonPlaceholderImagesResponse.data;
        } catch (error) {
            errors.value = error.response?.data;
            console.log(error, 'inside error', error.response);
        } finally {
            fetching.value = false;
        }
    }

    return {fetching, errors, getLatestFavoriteImages, metaData, images};
}
