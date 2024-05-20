<script setup lang="ts">
interface InputProps {
  modelValue: string;
  type?: string;
  placeholder?: string;
}

withDefaults(defineProps<InputProps>(), {
  type: 'text',
  placeholder: 'Введите текст:',
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    class="input"
    :placeholder="placeholder"
    :type="type"
    :value="modelValue"
    @input="updateValue"
  />
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 10px 25px;
  margin: 5px 0;
  font-size: 18px;
  border: 1px solid #61dafb;
  border-radius: 5px;
}
</style>
