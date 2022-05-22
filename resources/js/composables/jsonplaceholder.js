import {ref} from "vue";
import axios from "axios";

export const getPhotos = () => {
    const photos = ref([]);
    const isFetchingPhotos = ref(true);
    const totalPhotosCount = ref(0);
    const fetchPhotos = async (start, limit, searchText = '') => {
        try {
            isFetchingPhotos.value = true;
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${start}&_limit=${limit}&q=${searchText}`);
            photos.value = response.data;
            totalPhotosCount.value = parseInt(response.headers['x-total-count']);
        } catch (error) {
            console.log(error)
        } finally {
            isFetchingPhotos.value = false;
        }
    }

    return {photos, totalPhotosCount, fetchPhotos, isFetchingPhotos};
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
