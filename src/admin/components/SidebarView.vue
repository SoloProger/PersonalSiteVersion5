<script setup lang="ts">
const sidebarList = [
  {
    name: 'Добавить новость',
    to: '/news/create',
  },
  {
    name: 'Редактировать новость',
    to: '/news/update',
  },
  {
    name: 'Список новостей',
    to: '/news/all',
  },
  {
    name: 'Список todo',
    to: '/todos',
  },
  {
    name: 'Добавить проект в портфолио',
    to: '/projects/add',
  },
  {
    name: 'Список проектов в портфолио',
    to: '/projects/all',
  },
];
</script>

<template>
  <aside class="sidebar">
    <ul class="sidebar_list">
      <li
        v-for="(link, idx) of sidebarList"
        :key="idx"
        class="sidebar_list_item"
      >
        <RouterLink class="link" :to="link.to">
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>
    <div class="admin_version">
      <strong>0.6.0</strong>
    </div>
  </aside>
</template>

<style scoped lang="scss">
sidebar {
  position: fixed;
  background-color: #282c34;
  height: 100vh;
  width: 22%;
  overflow: auto;
  border-right: 1px solid #fff;
}

.sidebar_list {
  color: #fff;
  text-transform: uppercase;
}

.sidebar_list_item {
  display: flex;
  list-style-type: none;
  font-size: 20px;
  margin-bottom: 70px;
  transition: 1s;
}

.sidebar_list_item::before {
  content: '';
  border: 1px solid #fff;
  margin: 0 20px;
}

.link {
  margin-right: 10px;
  text-decoration: none;
  color: #fff;
}

.active_link {
  text-decoration: none;
  color: #1e88e5;
}

.admin_version {
  text-align: center;
}
</style>
