<template>
  <div class="popup">
    <div class="popup-body">
      <slot />
    </div>
    <div class="popup-backdrop" @mousedown="emits('closePopup', true)"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

const props = defineProps({});
const emits = defineEmits(["closePopup"]);

onMounted(() => {
  document.body.style.height = "100vh";
  document.body.style.overflowY = "hidden";
});
onUnmounted(() => {
  document.body.style.height = "auto";
  document.body.style.overflowY = "auto";
});
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  z-index: 5000;

  .popup-body {
    border-radius: 40px;
    background: #343434;
    width: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    color: #fff;
    box-sizing: border-box;
    padding: 30px;
    position: fixed;
    z-index: 5000;
  }
  .popup-backdrop {
    position: fixed;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #34343400;
  }
}

@media screen and (max-width: 500px) {
  .popup {
    .popup-body {
      width: 100%;
      max-width: 90vw;
    }
  }
}
</style>
