<script lang="ts" setup>
import ContactCard from '../cards/ContactCard.vue';

interface ContactCardProps {
  icon: string;
  title: string;
  body: string;
  link: string;
  button: string;
}

defineProps<{ contacts: ContactCardProps[] }>();
</script>
<template>
  <div className="card__wrapper">
    <ContactCard
      v-for="(contact, idx) of contacts"
      :key="idx"
      :icon="contact.icon"
      :title="contact.title"
      :body="contact.body"
      :button="contact.button"
      :link="contact.link"
    />
  </div>
</template>
