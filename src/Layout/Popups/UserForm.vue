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
          @click="input.city.translated = true"
          :class="{ translated: input.city.translated || input.city.data.length > 0 }"
        >
          <input
            type="text"
            id="name"
            v-model="input.city.data"
            :class="{ error: input.city.error }"
          />
          <label for="name">Город</label>
          <span class="err" v-if="input.city.error">Введите город</span>
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
          <span class="err" v-if="input.robot.error">Пройдите капчу</span>
        </div>
      </div>

      <vue-recaptcha
        v-show="true"
        sitekey="6Lc-W74qAAAAALbus2qD_5EDLNlg6HGEgp4TP0xv"
        size="normal"
        theme="dark"
        hl="ru"
        :loading-timeout="30000"
        @verify="input.robot.isRobot = false"
        @fail="input.robot.isRobot = true"
        @error="input.robot.isRobot = false"
      />
    </form>
    <div class="buttons">
      <button-red style="width: 100%" @click="makeMessage()" :animate="true">
        Оформить
      </button-red>
    </div>
  </div>
</template>
<script setup>
import ButtonRed from "@/Layout/TemplateParts/ButtonRed.vue";
import { onMounted, reactive } from "vue";
import { vMaska } from "maska/vue";
import { sendMessage } from "@/js/tgbell.js";
import { cart } from "@/js/cart.js";
import { useRouter } from "vue-router";

import vueRecaptcha from "vue3-recaptcha2";

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
  city: {
    data: "",
    translated: false,
    error: false,
  },
  robot: {
    isRobot: true,
    error: false,
  },
});

const router = useRouter();
const emits = defineEmits(["successStep"]);
const makeMessage = () => {
  input.name.error = false;
  input.phone.error = false;
  input.city.error = false;
  input.robot.error = false;

  if (input.name.data.length <= 0) {
    input.name.error = true;
  } else if (input.city.data.length <= 0) {
    input.city.error = true;
  } else if (input.phone.data.length <= 16) {
    input.phone.error = true;
  } else if (input.robot.isRobot) {
    input.robot.error = true;
  } else {
    console.log(12);
    let order = "";
    for (const model of cart.items) {
      console.log(model);
      model.name
        ? (order += model.model + ", " + model.sku + ", " + model.count + "шт. \n")
        : null;
    }
    const text = `Имя: ${input.name.data}, \nТелефон: ${input.phone.data} , \nГород: ${input.city.data} , \nЗаказ: ${order}`;
    sendMessage(text);
    emits("successStep");

    cart.items.splice(0, cart.items.length);
    localStorage.removeItem("userCart");
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
@media screen and (max-width: 500px) {
  h2 {
    font-size: 25px;
  }
  .user-form {
    flex-wrap: wrap;
  }
  .col {
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
