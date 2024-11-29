<template>
  <div class="cart">
    <div class="cart-heading">Корзина пуста</div>
    <div class="cart-body">
      <div
        class="cart-item"
        v-for="(item, index) of cart.items"
        :key="index"
        v-show="cart.items.length > 0"
      >
        <div class="item-name">{{ item.name }} {{ item.model }}</div>
        <div class="item-photo">
          <img :src="item.image" alt="" />
        </div>
        <button-gray
          @click="removeFromCart(index)"
          style="cursor: pointer; font-size: 12px"
        >
          Убрать
        </button-gray>
      </div>
    </div>
    <div class="buttons">
      <button-red v-show="cart.items.length > 0"> Заказать </button-red>
      <button-gray v-show="cart.items.length > 0"> Продолжить покупки </button-gray>
    </div>
  </div>
</template>
<script setup>
import { cart, removeFromCart } from "@/js/cart";
import ButtonRed from "../TemplateParts/ButtonRed.vue";
</script>
<style lang="scss" scoped>
.cart {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  .buttons {
    margin-top: 40px;
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .cart-heading {
    width: 100%;
    color: #fff;
    font-family: "Gotham Pro";
    font-size: 46px;
    font-style: italic;
    font-weight: 700;
    margin-bottom: 30px;
    line-height: normal;
  }
  .cart-body {
    width: 100%;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;

    .cart-item {
      width: 30%;

      .item-name {
        color: #fff;
        font-family: "Gotham Pro";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .item-photo {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
