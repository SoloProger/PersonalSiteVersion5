<script setup lang="ts">
import { contacts } from '../../utils/contacts.ts';
import ContactList from '../list/ContactList.vue';
</script>

<template>
  <div class="contact__wrapper">
    <div class="contact__header">
      <h2>Контакты</h2>
    </div>
    <hr />
    <ContactList :contacts="contacts" />
  </div>
</template>
