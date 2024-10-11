<template>
  <div class="scroll-box">
    <p>узнайте подробнее о моделях</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
      <path d="M8 8V5M8 21C4.13401 21 1 17.866 1 14V8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8V14C15 17.866 11.866 21 8 21Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'ScrollBox'
}
</script>
<style lang="scss" scoped>
.scroll-box {
  margin-top: 100px;
  align-items: center;
  text-align: center;
  p {
    color: #FFF;
    text-align: center;
    font-family: "Gotham Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

  }
}
</style>