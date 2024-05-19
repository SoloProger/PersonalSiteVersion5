import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.scss';

// import { components } from './shared/ui';
import router from './router.ts';

const app = createApp(App);

// components.forEach((component) => {
//   app.component(component.name, component.component);
// });

app.use(router);

app.mount('#app');
