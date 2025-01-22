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
          <img :src="item.image" alt="" lazy />
        </div>

        <div class="counter">
          <button-gray
            @click="changeQuantity('remove', item, index)"
            style="cursor: pointer; font-size: 12px"
          >
            -
          </button-gray>
          <div class="count">{{ item.count || 1 }}</div>
          <button-gray
            @click="changeQuantity('add', item)"
            style="cursor: pointer; font-size: 12px"
          >
            +
          </button-gray>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button-red
        v-show="cart.items.length > 0"
        @click="emits('checkoutStep')"
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

const emits = defineEmits(["checkoutStep"]);

const changeQuantity = (direction, item, index) => {
  if (direction === "add") {
    item.count++;
  } else {
    if (item.count === 1) {
      removeFromCart(index);
    } else {
      item.count--;
    }
  }

  localStorage.setItem("userCart", JSON.stringify(cart.items));
};
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
    width: 100%;
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
    text-align: center;
  }
  .cart-body {
    width: 100%;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    position: relative;
    max-height: 70vh;
    overflow-x: hidden;
    overflow-y: auto;
    justify-content: space-around;

    .cart-item {
      width: 30%;
      display: flex;
      flex-wrap: wrap;

      .item-name {
        color: #fff;
        font-family: "Gotham Pro";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
      }
      .item-photo {
        margin-top: 10px;
        margin-bottom: 10px;
        img {
          width: 100%;
        }
      }
      .counter {
        background-color: red;
        display: flex;
        width: 120px;
        align-items: center;
        justify-content: center;
        height: 30px;
        border-radius: 20px;
        margin-top: 5px;
        margin-left: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 20px;
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
        .counter {
          margin: 0 auto;
        }
        .item-name {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
