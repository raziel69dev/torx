<template>
  <div class="model-to-buy">
    <div class="model-name">{{ data.name }} {{ data.model }}</div>
    <div class="model-photo">
      <img :src="data.image" alt="" lazy />
    </div>
    <button-red
      @click="addToCart(data), emits('closePopup', true)"
      style="position: relative; z-index: 2"
    >
      купить
    </button-red>

    <the-blur-round :width="500" style="opacity: 0.5" />
  </div>
</template>

<script setup>
import { addToCart } from "@/js/cart";
import ButtonRed from "../TemplateParts/ButtonRed.vue";
import TheBlurRound from "../TemplateParts/TheBlurRound.vue";

const props = defineProps({
  data: null,
});
const emits = defineEmits(["closePopup"]);
</script>

<style lang="scss" scoped>
.model-to-buy {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  .model-name {
    color: #fff;
    font-family: "Gotham Pro";
    font-size: 36px;
    font-style: italic;
    text-align: center;
    font-weight: 700;
    line-height: normal;
    z-index: 1;
  }
  .model-photo {
    width: 100%;
    text-align: center;
    z-index: 1;
  }
}
.buy {
  background: #f00;
  padding: 20px 60px;
  color: #fff;
  font-family: "Gotham Pro";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
}

@media screen and (max-width: 500px) {
  .model-to-buy {
    .model-name {
      font-size: 16px;
    }
    .model-photo {
      width: 100%;

      img {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
