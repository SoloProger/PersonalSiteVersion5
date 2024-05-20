<script lang="ts" setup>
interface ContactCardProps {
  icon: string;
  title: string;
  body: string;
  link: string;
  button: string;
}

defineProps<ContactCardProps>();
</script>

<template>
  <div class="contact__card">
    <div class="card__header">
      <img :src="icon" alt="icon" />
      <h3>{{ title }}</h3>
    </div>
    <div class="card__body">{{ body }}</div>
    <div class="card__footer">
      <ButtonUI>
        <a :href="link" class="button__link" target="_blank" rel="noreferrer">
          {{ button }}
        </a>
      </ButtonUI>
    </div>
  </div>
</template>
