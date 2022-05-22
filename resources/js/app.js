import {createApp} from 'vue'
import store from '~/stores';
import router from '~/router';
import App from '~/layouts/App';

const app = createApp(App)
    .use(store)
    .use(router);

app.mount('#app');
