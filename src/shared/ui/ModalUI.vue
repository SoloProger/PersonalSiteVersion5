<script setup lang="ts">
export interface ModalProps {
  show: boolean;
}

defineProps<ModalProps>();

defineEmits(['close']);
</script>

<template>
  <teleport to="body">
    <transition name="modal">
      <section v-if="show" class="modal" @click="$emit('close')">
        <div class="modal__content" @click.stop="">
          <slot></slot>
        </div>
      </section>
    </transition>
  </teleport>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal__content {
  padding: 25px;
  background: #ffffff;
  border-radius: 16px;
  min-width: 250px;
  color: #000;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
