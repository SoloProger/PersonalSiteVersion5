<script setup lang="ts">
import PortfolioCard from '../components/cards/PortfolioCard.vue';
import { portfolioList } from '../utils/portfolioCards';
</script>

<template>
  <section class="portfolio">
    <PortfolioCard
      v-for="(project, idx) of portfolioList"
      :key="idx"
      :link="project.link"
      :img="project.img"
      :title="project.title"
      :description="project.description"
      :is-button="project.isButton"
    />
  </section>
</template>
