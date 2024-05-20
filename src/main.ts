import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.scss';

import router from './router.ts';
import { components } from './shared/ui';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component.component);
});

app.use(router);

app.mount('#app');
