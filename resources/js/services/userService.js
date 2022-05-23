import api from "../utils/api";

export default {
    async updateImageFavorite(payload) {
        return api.post("/api/user/favoritePicture", payload);
    }
};
