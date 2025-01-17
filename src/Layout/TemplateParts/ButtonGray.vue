<template>
  <button class="btn button-show-more">
    <slot />
  </button>
</template>
<script>
export default {
  name: "ButtonGray",
};
</script>

<style lang="scss" scoped>
.button-show-more {
  color: #fff;
  font-family: "Gotham Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media screen and (max-width: 500px) {
  .button-show-more {
    font-size: 12px;
  }
}
</style>
