<script setup>
import { RouterView } from "vue-router";
import { defineAsyncComponent, onMounted, ref } from "vue";
import PromoText from "@/Layout/TemplateParts/PromoText.vue";
import ScrollBox from "@/Layout/TemplateParts/ScrollBox.vue";
import Models from "@/Layout/TemplateParts/Models.vue";
import BaseHeader from "./Layout/TemplateParts/BaseHeader.vue";
import TheBlurRound from "@/Layout/TemplateParts/TheBlurRound.vue";
import Presentation from "./Layout/TemplateParts/Presentation.vue";
import WhereToBuy from "@/Layout/TemplateParts/WhereToBuy.vue";
import BaseSlider from "@/Layout/TemplateParts/BaseSlider.vue";
import { cart } from "./js/cart";
import ThePopup from "./Layout/Popups/ThePopup.vue";
import Cart from "./Layout/Popups/Cart.vue";

const popup = ref({
  show: false,
});

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
</script>

<template>
  <main class="content">
    <header>
      <BaseHeader />
    </header>
    <section style="position: relative">
      <BaseSlider id="promo" />
      <TheBlurRound :width="400" />
      <PromoText />
      <ScrollBox />
    </section>
    <section>
      <Models id="models" />
      <Presentation id="about" />
      <WhereToBuy />
      <TheBlurRound :width="100" />
    </section>
    <div class="cart-fixed" v-if="cart.items.length >= 1">
      <span class="counter">{{ cart.items.length }}</span>
      <svg
        @click="popup.show = true"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="24"
        viewBox="0 0 22 24"
        fill="none"
      >
        <path
          d="M15.3656 8.63985V5.36563C15.3656 2.95456 13.4111 1 11 1C8.58893 1 6.63437 2.95456 6.63437 5.36563V8.63985M1.82345 10.1154L1.1686 17.1004C0.982412 19.0864 0.889316 20.0795 1.21886 20.8465C1.50835 21.5202 2.01566 22.0773 2.65948 22.4285C3.39237 22.8282 4.38974 22.8282 6.38449 22.8282H15.6155C17.6103 22.8282 18.6076 22.8282 19.3405 22.4285C19.9843 22.0773 20.4916 21.5202 20.7811 20.8465C21.1107 20.0795 21.0176 19.0864 20.8314 17.1004L20.1766 10.1154C20.0193 8.43832 19.9407 7.59978 19.5636 6.96581C19.2314 6.40747 18.7406 5.96057 18.1537 5.68197C17.4873 5.36563 16.6451 5.36563 14.9607 5.36563L7.03933 5.36563C5.3549 5.36563 4.51269 5.36563 3.84628 5.68197C3.25937 5.96057 2.76861 6.40747 2.43644 6.96581C2.05929 7.59978 1.98067 8.43832 1.82345 10.1154Z"
          stroke="#C5C5C5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <the-popup v-if="popup.show" @closePopup="popup.show = false">
      <cart />
    </the-popup>
  </main>

  <RouterView />
</template>

<style scoped lang="scss">
.content {
  max-width: 1440px;
  width: calc(100% - 20px);
  padding: 10px;
  margin: 0 auto;
  box-sizing: border-box;
}

.cart-fixed {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 30px;
  gap: 25px;
  background-color: #fff;
  border-radius: 500px;
  padding: 10px 10px;
  cursor: pointer;

  .counter {
    position: absolute;
    left: 45%;
    top: 5px;
    font-size: 10px;
    color: #fff;
    background-color: red;
    padding: 2px 5px;
    border-radius: 20px;
  }
}

@media screen and (max-width: 500px) {
  .content {
    margin: 0;
    width: 100vw;
    overflow: hidden;
  }
}
</style>
