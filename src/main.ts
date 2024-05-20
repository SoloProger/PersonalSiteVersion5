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

// TODO Архитектура. Разнести все компоненты в папки-элементы.
// TODO Разбить стили на файлы.
// TODO Сделать отдельную страницу для просмотра новостей.
// TODO Сделать раздел блог и вывести последние посты на главную страницу, вместо формы связи

/**
 * Project structure
 *
 * Advanced Section:
 *    Four components:
 *        1.Page
 *        2.Bloc
 *        3.List/Table/Form
 *        4.Card
 *
 * Simple section:
 *     Three components:
 *        1.Bloc
 *        2.Card
 *
 * For example: News - it`s advanced section. There is had bloc, list and card.
 * But, Portfolio - simple section (page and card)
 */
