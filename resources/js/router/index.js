import { createRouter, createWebHistory } from "vue-router";
import {JsonPlaceHolderApiDefaultValues} from "~/constants";
import {isAuthenticated} from "../composables/auth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('~/pages/Home'),
            meta: {meta_title: 'Home'},
            props: route => (
                {
                    start: route.query.start ? parseInt(route.query.start): JsonPlaceHolderApiDefaultValues.START,
                    limit: route.query.limit ? parseInt(route.query.limit) : JsonPlaceHolderApiDefaultValues.LIMIT,
                    search: route.query.search ?? JsonPlaceHolderApiDefaultValues.SEARCH
                })
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('~/pages/auth/Login'),
            meta: {meta_title: 'User Login', isGuest: true},
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('~/pages/auth/Register'),
            meta: {meta_title: 'User Register', isGuest: true},
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: ()=> import('../pages/NotFound'),
        }
    ],
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !isAuthenticated.value) {
        next({name: "Login"})
    } else if(to.meta.isGuest && isAuthenticated.value) {
        next({name: "Home"})
    } else {
        next();
    }
});

export default router;
