<template>
  <div class="wrapper">
    <h2>Что создано искусственным интеллектом в этом инструменте?</h2>
    <div class="features">
      <div class="feature left">
        <h3>Рукоять:</h3>
        <p>
          Ai, проанализировав более одного миллиона анатомического строения ладоней и
          кистей, выявил оптимальный размер, эргономику и материал для максимально
          удобного хвата любым пользователем
        </p>
      </div>
      <div class="drill">
        <img :src="drill" alt="CD-12" />
      </div>
      <div class="feature right">
        <h3>Двигатель:</h3>
        <p>
          Двигатель шуруповерта оптимально сбалансирован согласно среднему коэффициенту
          нагрузки в 100 проанализированных ремонтно-строительных бригадах.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import drill from "@/assets/images/drills/9310212.webp";
</script>
<style lang="scss" scoped>
.wrapper {
  min-height: 85vh;
  display: flex;
  flex-wrap: wrap;
  align-content: center;

  .features {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: stretch;
    .drill {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .feature {
    color: #fff;
    max-width: 300px;
    display: flex;
    flex-wrap: wrap;
    &.left {
      align-self: end;
    }
    &.right {
      margin-top: 20px;
      align-self: start;
    }
    h3 {
      font-size: 45px;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
    }
  }
}
@media screen and (max-width: 500px) {
  h2 {
    font-size: 25px;
  }
  .wrapper {
    padding-top: 0;
    .features {
      flex-wrap: wrap;
    }
    .drill {
      order: 1;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .feature {
      margin-top: -70px;
      order: 2;
      h3 {
        font-size: 22px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
</style>
