<template>
  <button v-if="!props.href" class="btn button-buy" @click="$emit('buttonClicked')">
    <slot />
  </button>

  <a v-else-if="hrefType === 'internal'" class="btn button-buy" :href="href">
    <slot />
  </a>

  <a v-else class="btn button-buy" :href="href" target="_blank">
    <slot />
  </a>
</template>
<script setup>
const props = defineProps({
  href: null,
  hrefType: "external",
});
</script>

<style lang="scss" scoped>
.button-buy {
  background: #f00;
  padding: 10px 20px;
  color: #fff;
  font-family: "Gotham Pro";
  font-size: 14px;
  font-style: normal;
  white-space: nowrap;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  display: flex;
  gap: 5px;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
}

@media screen and (max-width: 500px) {
  .button-buy {
    font-size: 12px;
  }
}
</style>
