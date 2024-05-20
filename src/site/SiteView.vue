<script setup lang="ts">
import FooterView from './components/FooterView.vue';
import Navbar from './components/NavbarView.vue';
</script>

<template>
  <div class="app">
    <Navbar />
    <RouterView />
    <FooterView />
  </div>
</template>
