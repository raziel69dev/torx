<template>
  <div class="cart">
    <div class="cart-heading">
      Корзина <span v-if="cart.items.length <= 0">пуста</span>
    </div>
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
        <div class="counter">x{{ item.count || 1 }}</div>
        <button-gray
          @click="removeFromCart(index)"
          style="cursor: pointer; font-size: 12px"
        >
          Убрать
        </button-gray>
      </div>
    </div>
    <div class="buttons">
      <button-red
        v-show="cart.items.length > 0"
        :href="`https://ptech.ru`"
        style="width: 100%"
      >
        Заказать
      </button-red>
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
    position: relative;

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
      .counter {
        background-color: red;
        display: flex;
        width: 30px;
        align-items: center;
        justify-content: center;
        height: 30px;
        border-radius: 20px;
        position: absolute;
        top: 160px;
        margin-left: 50px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .cart {
    .cart-heading {
      font-size: 20px;
    }
    .cart-body {
      .cart-item {
        width: 45%;
        box-sizing: border-box;
        .item-name {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
