import {ref} from "vue";
import axios from "axios";

export const getPhotos = () => {
    const photos = ref([]);
    const isFetchingPhotos = ref(true);
    const totalPhotosCount = ref(0);
    const fetchPhotos = (start, limit, searchText = '') => {
        isFetchingPhotos.value = true;
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${start}&_limit=${limit}&q=${searchText}`)
            .then(function (response) {
                photos.value = response.data;
                totalPhotosCount.value = parseInt(response.headers['x-total-count']);
                console.log(response.headers['link']);
                console.log(response, photos.value);
            })
            .catch(function (error) {
                console.log(error)
            }).finally(() => {
            isFetchingPhotos.value = false;
        });
    }

    return {photos, totalPhotosCount, fetchPhotos, isFetchingPhotos};
}

export default {getPhotos}
