<script setup>
import {RouterView} from 'vue-router'
import {defineAsyncComponent} from "vue";
import PromoText from "@/Layout/TemplateParts/PromoText.vue";
import ScrollBox from "@/Layout/TemplateParts/ScrollBox.vue";
import Models from "@/Layout/TemplateParts/Models.vue";


const BaseHeader = defineAsyncComponent({
  loader: () => import('@/Layout/TemplateParts/BaseHeader.vue')
})

const Round = defineAsyncComponent({
  loader: () => import('@/Layout/TemplateParts/TheBlurRound.vue')
})

const Slider = defineAsyncComponent({
  loader: () => import('@/Layout/TemplateParts/BaseSlider.vue')
})
</script>

<template>
  <main class="content">
    <header>
      <BaseHeader />
    </header>
    <section style="position: relative">
      <Slider id="promo" />
      <Round :width="600" />
      <PromoText />
      <ScrollBox />
    </section>
    <section>
      <Models />
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
