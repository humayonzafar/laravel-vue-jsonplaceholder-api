import {createApp} from 'vue'
import store from '@/js/stores';
import router from '@/js/router';
import App from '@/js/layouts/App';

const app = createApp(App)
    .use(store)
    .use(router);

app.mount('#app');
