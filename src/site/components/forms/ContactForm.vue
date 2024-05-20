<script setup lang="ts">
import { ref } from 'vue';

const formData = ref<{ name: string; phone: string }>({
  name: '',
  phone: '',
});
</script>

<template>
  <div class="contact__wrapper">
    <div class="contact__header">
      <h2>Форма связи</h2>
    </div>
    <hr />
    <div class="form__inner">
      <div class="form__img">
        <img src="/images/logo.png" alt="" class="image" />
      </div>
      <div class="form__wrapper">
        <div class="form__header">
          <h2>Заполните форму</h2>
        </div>
        <form>
          <div class="form__input">
            <InputUI v-model="formData.name" placeholder="Ваше имя"></InputUI>
          </div>

          <div class="form__input">
            <InputUI
              v-model="formData.phone"
              placeholder="Ваш телефон"
            ></InputUI>
          </div>

          <ButtonUI>Оставить заявку</ButtonUI>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
