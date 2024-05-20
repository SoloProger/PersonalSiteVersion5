<script setup lang="ts">
interface NewsCardProps {
  title: string;
  date: string;
  tag: string;
  body: string;
}

defineProps<NewsCardProps>();
</script>

<template>
  <div class="news-card">
    <img src="/images/newsImg.png" alt="" />
    <div class="card-content">
      <h3>{{ title }}</h3>
      <div class="card-navbar">
        <h4 class="date">{{ date }}</h4>
        <h4 class="tag">{{ tag }}</h4>
      </div>
      <p>{{ body }}</p>
    </div>
  </div>
</template>
