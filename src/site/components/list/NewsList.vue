<script setup lang="ts">
interface NewsCardProps {
  title: string;
  date: string;
  tag: string;
  body: string;
}

defineProps<{ news: NewsCardProps[] }>();
</script>
<template>
  <div class="news-list">
    <NewsCard
      v-for="(record, idx) of news"
      :key="idx"
      :title="record.title"
      :body="record.body"
      :tag="record.tag"
      :date="record.date"
    />
  </div>
</template>
