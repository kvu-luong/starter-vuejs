import { createApp } from 'vue';
import App from './App.vue';

import './index.css';
import './assets/scss/styles.scss';
import router from './routes/routes';

createApp(App)
  .use(router)
  .mount('#app');
