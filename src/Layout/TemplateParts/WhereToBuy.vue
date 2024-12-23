<template>
  <div>
    <div class="where-to-buy_wrapper">
      <div class="where-to-buy">
        <div class="card" v-for="logo of whereToBuy" :key="logo.logo">
          <div class="logo"><img :src="logo.logo" alt="" /></div>
          <div class="when">{{ logo.when }}</div>
          <button-red
            :disabled="logo.isDisabled"
            @click="router.push(logo.link)"
            :class="{ disabled: logo.isDisabled }"
          >
            123
          </button-red>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { whereToBuy } from "@/js/whereToBuy";
import ButtonRed from "@/Layout/TemplateParts/ButtonRed.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<style lang="scss" scoped>
.where-to-buy {
  margin-top: 190px;
  display: flex;
  justify-content: space-between;
  .card {
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 1px solid #535353;
    background-color: #3a3a3a7a;
    backdrop-filter: blur(3px);
    width: 18%;
    user-select: none;
    .when {
      font-size: 20px;
      margin-top: 20px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 20px;
    }
    .logo {
      max-width: 120px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
