<script setup lang="ts">
import ContactsBloc from '../components/blocs/ContactsBloc.vue';
import HeaderBloc from '../components/blocs/HeaderBloc.vue';
import LatestPost from '../components/blocs/LatestPost.vue';
import NewsBloc from '../components/blocs/NewsBloc.vue';
</script>

<template>
  <main>
    <HeaderBloc />
    <LatestPost />
    <NewsBloc />
    <ContactsBloc />
  </main>
</template>
