<template>
  <button class="btn button-show-more">
    <slot />
  </button>
</template>
<script>
export default {
  name: 'ButtonGray'
}
</script>

<style lang="scss" scoped>
.button-show-more {
  color: #FFF;
  font-family: "Gotham Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
