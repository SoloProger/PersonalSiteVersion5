<script lang="ts" setup>
import { navbarLinks } from '../utils/navbarLinks';
</script>

<template>
  <nav>
    <div class="nav__wrapper">
      <div class="nav__logo"></div>
      <ul class="nav__list">
        <li v-for="(link, idx) of navbarLinks" class="nav__item" :key="idx">
          <RouterLink :to="link.path" class="nav__item__link">
            {{ link.name }}</RouterLink
          >
        </li>
        <li class="nav__item">
          <ButtonUI> Кнопка </ButtonUI>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}

.nav__logo {
  padding: 10px;
  font-size: 50px;
  font-weight: 700;
  color: #61dafb;
  text-decoration: none;
}

.nav__list {
  display: flex;
  align-items: center;
  list-style-type: none;
}

.nav__item {
  font-size: 20px;
  margin: 0 15px;
  text-transform: uppercase;
}

.nav__item__link {
  text-decoration: none;
  text-transform: uppercase;
  color: #21243d;

  transition: color 0.5s linear;
}

.nav__item__link::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;

  background-color: #ff6464;
  opacity: 0;

  display: none;
  z-index: 1;

  transition: opacity 0.5s linear;
}

.nav__item__link:hover {
  color: #ff6464;
}

.nav__item__link:hover::after {
  opacity: 1;
}

@media (max-width: 700px) {
  .nav__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style-type: none;
  }
}
</style>
