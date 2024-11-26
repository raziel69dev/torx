<template>
  <button class="btn button-buy" @click="$emit('buttonClicked')">
    <slot />
  </button>
</template>
<script>
export default {
  name: 'ButtonRed'
}
</script>

<style lang="scss" scoped>

.button-buy {
  background: #F00;
  padding: 10px 40px;
  color: #FFF;
  font-family: "Gotham Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
