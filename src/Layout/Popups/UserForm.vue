<template>
  <div class="cart">
    <h2 class="cart-heading">Оформление заказа</h2>
    <form class="user-form" @submit.prevent @keydown.enter="makeMessage()">
      <div class="col">
        <div
          class="input-wrapper"
          @click="input.name.translated = true"
          :class="{ translated: input.name.translated || input.name.data.length > 0 }"
        >
          <input
            type="text"
            id="name"
            v-model="input.name.data"
            :class="{ error: input.name.error }"
          />
          <label for="name">Ваше имя</label>
          <span class="err" v-if="input.name.error">Введите полное имя</span>
        </div>
        <div
          class="input-wrapper"
          @click="input.phone.translated = true"
          :class="{ translated: input.phone.translated || input.phone.data.length > 0 }"
        >
          <input
            :class="{ error: input.phone.error }"
            type="tel"
            id="tel"
            v-maska="'+7 (9##) ###-####'"
            v-model="input.phone.data"
          />
          <label for="tel">Ваш телефон</label>
          <span class="err" v-if="input.phone.error">Не верный номер телефона</span>
        </div>
      </div>
    </form>
    <div class="buttons" @click="makeMessage()">
      <button-red> Оформить </button-red>
    </div>
  </div>
</template>
<script setup>
import ButtonRed from "@/Layout/TemplateParts/ButtonRed.vue";
import { reactive } from "vue";
import { vMaska } from "maska/vue";
import { sendMessage } from "@/js/tgbell.js";
import { cart } from "@/js/cart.js";
import { useRouter } from "vue-router";

const input = reactive({
  name: {
    data: "",
    translated: false,
    error: false,
  },
  phone: {
    data: "+7 (9",
    translated: false,
    error: false,
  },
});

const router = useRouter();
const emits = defineEmits(["successStep"]);
const makeMessage = () => {
  input.name.error = false;
  input.phone.error = false;
  if (input.name.data.length > 3 && input.phone.data.length > 16) {
    let order = "";
    for (const model of cart.items) {
      console.log(model);
      model.name ? (order += model.model + ", " + model.count + "шт. \n") : null;
    }
    const text = `Имя: ${input.name.data}, \nТелефон: ${input.phone.data} , \nЗаказ: ${order}`;
    sendMessage(text);
    emits("successStep");

    cart.items.splice(0, cart.items.length);
    localStorage.removeItem("userCart");
  } else if (input.name.data.length <= 3) {
    input.name.error = true;
  } else if (input.phone.data.length <= 16) {
    input.phone.error = true;
  }
};
</script>
<style lang="scss" scoped>
.user-form {
  margin-top: 30px;
  margin-bottom: 40px;
}
.col {
  display: flex;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
}
.err {
  color: red;
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  left: 0;
}
.input-wrapper {
  position: relative;
  margin-top: 30px;
  width: 100%;

  input {
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: transparent;
    color: #fff;

    &.error {
      border-color: red;
    }
  }
  label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    transition: 0.3s ease;
  }

  &.translated {
    label {
      background-color: #343434;
      font-size: 12px;
      padding-left: 5px;
      padding-right: 5px;
      top: 0;
    }
  }
}
</style>
