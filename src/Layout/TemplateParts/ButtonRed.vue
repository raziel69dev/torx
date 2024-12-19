<template>
  <button v-if="!props.href" class="btn button-buy" @click="$emit('buttonClicked')">
    <slot />
  </button>

  <a v-else class="btn button-buy" :href="href" target="_blank">
    <slot />
  </a>
</template>
<script setup>
const props = defineProps({
  href: null,
});
</script>

<style lang="scss" scoped>
.button-buy {
  background: #f00;
  padding: 10px 40px;
  color: #fff;
  font-family: "Gotham Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
