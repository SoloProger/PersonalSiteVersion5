<script setup lang="ts">
import { ref } from 'vue';
import AboutSite from './AboutSite.vue';

const visible = ref<boolean>(false);
</script>

<template>
  <footer>
    <div className="footer-wrapper">
      <span className="footer-text">Made by Andrei Solo</span>
      <span className="about-site" @click="visible = true"> О сайте </span>
      <ModalUI :show="visible" @close="visible = false">
        <AboutSite />
      </ModalUI>
      <span className="copy">© Copyright 2024. All rights reserved</span>
    </div>
  </footer>
</template>
