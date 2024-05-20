<script setup lang="ts">
import AboutCard from '../components/cards/AboutCard.vue';
import ContactForm from '../components/forms/ContactForm.vue';
import { aboutList } from '../utils/aboutList';
</script>

<template>
  <main>
    <section className="about-card">
      <AboutCard
        v-for="(card, idx) of aboutList"
        :key="idx"
        :title="card.title"
        :description="card.description"
        :button-link="card.buttonLink"
        :button-title="card.buttonTitle"
        :is-button="card.isButton"
      />
    </section>
    <ContactForm />
  </main>
</template>
