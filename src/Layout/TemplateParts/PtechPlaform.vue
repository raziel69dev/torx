<template>
  <div class="wrapper">
    <div class="text">
      <h2>Это еще не всё, потому что завтра</h2>
      <p>
        Нас ждет расширение линейки и единая аккумуляторная система PTECH PLATFORM —
        бытовой и садовый аккумуляторный инструмент под брендами TORX и POLYAGRO.
      </p>
      <div class="logos">
        <img :src="logo" alt="logotype" v-for="logo of logos" :key="logo" />
      </div>
    </div>
    <div class="photo">
      <img :src="ptech" alt="" />
    </div>
  </div>
</template>
<script setup>
import ptech from "@/assets/images/ptech.png";
import logoPtech from "@/assets/images/logo__ptech.png";
import logoTorx from "@/assets/images/logo__torx.png";
import logoPolyagro from "@/assets/images/logo__polyagro.png";

const logos = [logoPtech, logoTorx, logoPolyagro];
</script>
<style lang="scss" scoped>
.wrapper {
  color: #fff;
  margin-top: 40px;
  display: flex;
  z-index: 1;
  position: relative;
  margin-top: 100px;
  align-items: center;
  gap: 50px;
  .text {
    width: 50%;
    p {
      margin-top: 40px;
      width: 70%;
    }
  }
  .photo {
    width: 50%;
    img {
      width: 100%;
    }
  }
  .logos {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-top: 50px;

    img {
      max-width: 100px;
      height: auto;
      opacity: 0.5;
    }
  }
}

@media screen and (max-width: 500px) {
  .wrapper {
    flex-wrap: wrap;
    .text,
    .photo {
      width: 100%;
      text-align: center;
      h2 {
        font-size: 25px;
      }
      p {
        width: 100%;
      }
    }
  }
}
</style>
