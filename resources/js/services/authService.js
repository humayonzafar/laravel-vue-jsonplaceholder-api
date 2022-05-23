import api from "../utils/api";

export default {
    async login(payload) {
        await api.get("/sanctum/csrf-cookie");
        return api.post("/login", payload);
    },
    logout() {
        return api.post("/logout");
    },
    async forgotPassword(payload) {
        await api.get("/sanctum/csrf-cookie");
        return api.post("/forgot-password", payload);
    },
    getAuthUser() {
        return api.get("/api/users/auth");
    },
    async resetPassword(payload) {
        await api.get("/sanctum/csrf-cookie");
        return api.post("/reset-password", payload);
    },
    updatePassword(payload) {
        return api.put("/user/password", payload);
    },
    async registerUser(payload) {
        await api.get("/sanctum/csrf-cookie");
        return api.post("/register", payload);
    },
    sendVerification(payload) {
        return api.post("/email/verification-notification", payload);
    },
    updateUser(payload) {
        return api.put("/user/profile-information", payload);
    }
};
