<script setup lang="ts">
interface AboutCardProps {
  title: string;
  description: string;
  buttonLink: string;
  buttonTitle: string;
  isButton: boolean;
}

defineProps<AboutCardProps>();
</script>

<template>
  <div class="about-card-wrapper">
    <div class="about-card-text">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>

      <ButtonUI v-if="isButton">
        <a
          class="button-link"
          :href="buttonLink"
          target="_blank"
          rel="noreferrer"
        >
          {{ buttonTitle }}
        </a>
      </ButtonUI>
    </div>
  </div>
</template>
