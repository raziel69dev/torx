<script setup>
import { RouterView } from "vue-router";
import { defineAsyncComponent, onMounted } from "vue";
import PromoText from "@/Layout/TemplateParts/PromoText.vue";
import ScrollBox from "@/Layout/TemplateParts/ScrollBox.vue";
import Models from "@/Layout/TemplateParts/Models.vue";
import BaseHeader from "./Layout/TemplateParts/BaseHeader.vue";
import TheBlurRound from "@/Layout/TemplateParts/TheBlurRound.vue";
import Presentation from "./Layout/TemplateParts/Presentation.vue";
import WhereToBuy from "@/Layout/TemplateParts/WhereToBuy.vue";
import BaseSlider from "@/Layout/TemplateParts/BaseSlider.vue";

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
      <TheBlurRound :width="600" />
      <PromoText />
      <ScrollBox />
    </section>
    <section>
      <Models id="models" />
      <Presentation id="about" />
      <WhereToBuy />
      <TheBlurRound :width="100" />
    </section>
  </main>

  <RouterView />
</template>

<style scoped>
.content {
  max-width: 1440px;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
