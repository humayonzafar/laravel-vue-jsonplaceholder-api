import {ref, computed} from "vue";
import {required, email, minLength, sameAs} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import store from '@/js/stores';
import router from "~/router";
import api from "~/utils/api";

export const authLogin = () => {
    const formData = ref({
        email: '',
        password: '',
        remember: false,
    });
    const errors = ref(null);
    const loading = ref(false);
    const login = async () => {
        v$.value.$touch();
        if (!v$.value.$invalid) {
            try {
                errors.value = null;
                loading.value = true;
                await api.get("/sanctum/csrf-cookie");
                await api.post("/login", formData.value);
                const authUser = await store.dispatch("get_auth_user");
                if (authUser) {
                    await router.push({path: '/'});
                } else {
                    errors.value = 'Something went wrong!'
                }
            } catch (error) {
                console.log(error, 'inside error', error.response);
                errors.value = error.response?.data;
            } finally {
                loading.value = false;
            }
        }
    }
    const validationRules = computed(() => {
        return {
            formData: {
                email: {
                    required,
                    email
                },
                password: {
                    required
                }
            }
        }
    });
    const v$ = useVuelidate(validationRules, {formData});
    const disableSubmitButton = computed(() => v$.value.$invalid || loading.value);

    return {formData, v$, login, errors, disableSubmitButton};
}

export const registerUser = () => {
    const formData = ref({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const errors = ref(null);
    const loading = ref(false);
    const register = async () => {
        v$.value.$touch();
        if (!v$.value.$invalid) {
            try {
                errors.value = null;
                loading.value = true;
                await api.get("/sanctum/csrf-cookie");
                await api.post("/register", formData.value);
                const authUser = await store.dispatch("get_auth_user");
                if (authUser) {
                    await router.push({path: '/'});
                } else {
                    errors.value = 'Something went wrong!'
                }
            } catch (error) {
                errors.value = error.response?.data;
                console.log(error, 'inside error', error.response);
                // errors.value = error.message;
            } finally {
                loading.value = false;
            }
        }
    }
    const validationRules = computed(() => {
        return {
            formData: {
                name: {
                    required
                },
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(8)
                },
                password_confirmation: {
                    required,
                    sameAsPassword: sameAs(formData.value.password),
                },
            }
        }
    });
    const v$ = useVuelidate(validationRules, {formData});
    const disableSubmitButton = computed(() => v$.value.$invalid || loading.value);

    return {formData, v$, register, errors, disableSubmitButton};
}

export const isAuthenticated = computed(() => !!store.getters["user"]);

export const getUserProfile = computed(() => isAuthenticated ? store.getters["user"] : null);
