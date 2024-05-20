<script setup lang="ts">
interface PortfolioCardProps {
  img: string;
  title: string;
  description: string;
  link: string;
  isButton?: boolean;
}

defineProps<PortfolioCardProps>();
</script>

<template>
  <div class="portfolio-card-wrapper">
    <img :src="img" alt="Изображение" />
    <div class="portfolio-card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>

      <ButtonUI v-if="isButton">
        <a :href="link" class="button__link" target="_blank" rel="noreferrer">
          Подробнее
        </a>
      </ButtonUI>
    </div>
  </div>
</template>
