<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  padding: 5px 15px;
  color: #ff6464;
  font-size: 20px;
  background: transparent;
  border: 1px solid #ff6464;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s linear;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;

    background: #ff6464;
    opacity: 0;

    display: none;
    z-index: 1;

    transition: opacity 0.3s linear;
  }

  &:hover {
    color: #ffffff;
    background: #ff6464;
  }

  &:hover::after {
    opacity: 1;
  }
}
</style>
