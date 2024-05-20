<script setup lang="ts">
import NewsList from '../list/NewsList.vue';
</script>

<template>
  <div className="news-wrapper">
    <div>
      <h2>Новости</h2>
    </div>
    <hr />

    <div>
      <Loader />
    </div>

    <NewsList :news="[]" />
  </div>
</template>
