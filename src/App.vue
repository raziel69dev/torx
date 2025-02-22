<script setup>
import { RouterView } from "vue-router";
import { defineAsyncComponent, onMounted, reactive, ref, shallowRef } from "vue";
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
import TheContacts from "./Layout/TemplateParts/TheContacts.vue";
import UserForm from "@/Layout/Popups/UserForm.vue";
import SendSuccess from "@/Layout/Popups/SendSuccess.vue";
import DrillFeatures from "./Layout/TemplateParts/DrillFeatures.vue";
import PtechPlaform from "./Layout/TemplateParts/PtechPlaform.vue";
import TorxPacks from "./Layout/TemplateParts/TorxPacks.vue";
import video from "@/assets/Ver-6.3.webm";
import poster from "@/assets/poster.jpg";
const popup = ref({
  show: false,
  component: shallowRef(Cart),
});

const videoBox = ref(null);
const playButton = reactive({
  show: true,
});

const playVideo = () => {
  videoBox.value.play();
  playButton.show = false;
};

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
      <TheBlurRound :width="100" />
      <PromoText />
      <!-- <ScrollBox /> -->
    </section>
    <section style="margin-top: 80px">
      <DrillFeatures id="features" />
      <div id="video">
        <button class="play" @click="playVideo()" v-show="playButton.show">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.5 7.96533C8.5 7.48805 8.5 7.24941 8.59974 7.11618C8.68666 7.00007 8.81971 6.92744 8.96438 6.9171C9.13038 6.90525 9.33112 7.03429 9.73261 7.29239L14.4532 10.3271C14.8016 10.551 14.9758 10.663 15.0359 10.8054C15.0885 10.9298 15.0885 11.0702 15.0359 11.1946C14.9758 11.337 14.8016 11.449 14.4532 11.6729L9.73261 14.7076C9.33112 14.9657 9.13038 15.0948 8.96438 15.0829C8.81971 15.0726 8.68666 14.9999 8.59974 14.8838C8.5 14.7506 8.5 14.512 8.5 14.0347V7.96533Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <video ref="videoBox" controls loop="false" preload="none" :poster="poster">
          <source :src="video" type="video/webm" />
        </video>
      </div>
      <Models id="models" />

      <TorxPacks id="packs" />
      <Presentation id="about" />
      <PtechPlaform id="platform" />
      <WhereToBuy />
      <TheContacts />
      <TheBlurRound :width="100" />
    </section>

    <div
      class="cart-fixed"
      v-if="cart.items.length >= 1"
      @click="
        popup.show = true;
        popup.component = shallowRef(Cart);
      "
    >
      <span class="counter">{{ cart.items.length }}</span>
      <svg
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
      <component
        :is="popup.component"
        @checkout-step="popup.component = shallowRef(UserForm)"
        @success-step="popup.component = shallowRef(SendSuccess)"
      ></component>
    </the-popup>

    <notifications position="bottom right" />
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
  padding-top: 50px;
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1400px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
  background-color: #000;
  border-radius: 10px;
}
#video {
  margin-top: 40px;
  position: relative;

  button {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    cursor: pointer;
    translate: -50% -50%;
    svg {
      width: 90px;

      height: 90px;
      path {
        stroke: #fff;
      }
    }
  }
  video {
    width: 100%;
    border-radius: 20px;
  }
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
  z-index: 100;

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
    overflow-x: hidden;
  }
  header {
    top: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
