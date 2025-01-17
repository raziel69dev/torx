<template>
  <div class="wrapper">
    <h2 style="width: 100%; text-align: center; margin-bottom: 100px">Комплектации</h2>
    <div class="drill-packs">
      <div
        class="pack-card"
        v-for="(pack, index) of torxPacks"
        :key="pack.name"
        :class="{ separator: index !== torxPacks.length - 1 }"
      >
        <div class="images">
          <!-- <div class="model">
            <img :src="pack.images.modelImage" alt="" />
          </div> -->

          <div class="all">
            <img :src="pack.images.allImage" alt="" />
          </div>

          <div class="pack">
            <img :src="pack.images.packImage" alt="" />
          </div>
        </div>
        <div class="text">
          <h2>
            {{ pack.name }} <span>{{ pack.sku }}</span>
          </h2>
          <p>
            Кейс для шуруповерта с набором бит TORX – это удобный и практичный аксессуар,
            предназначенный для хранения и транспортировки различных бит TORX,
            используемых при работе с крепежными элементами. Кейс обеспечивает безопасное
            хранение инструментов, предотвращая их потерю и повреждение.
          </p>
          <div class="features">
            <div class="feature">
              <div class="heading">Защита</div>
              <div class="description">
                Специальные ячейки защищают биты от механических воздействий, царапин и
                других повреждений, которые могут возникнуть во время переноски или
                хранения.
              </div>
            </div>
            <div class="feature">
              <div class="heading">Мобильность</div>
              <div class="description">
                Легкий и компактный кейс удобно брать с собой на работу или на выездной
                объект. Это особенно важно для профессионалов, которым часто приходится
                работать вне мастерской.
              </div>
            </div>
            <div class="feature">
              <div class="heading">Долговечность</div>
              <div class="description">
                Качественный материал кейса обеспечивает его долговечность даже при
                интенсивном использовании.
              </div>
            </div>
          </div>
          <h3>В этом наборе содержится:</h3>

          <div class="includes">
            <ul>
              <li v-for="item of pack.includes.left" :key="item">{{ item }}</li>
            </ul>
            <ul>
              <li v-for="item of pack.includes.right" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div class="buttons">
            <button-red @click="buyDrill(pack)"> купить набор </button-red>
            <button-gray @click="openPopup(pack.drillModel)">
              характеристики модели
            </button-gray>
          </div>
        </div>
      </div>
    </div>
    <teleport to="body">
      <the-popup v-if="popup.show" @closePopup="popup.show = false">
        <component
          :is="popup.component"
          :data="popup.content"
          @closePopup="popup.show = false"
        />
      </the-popup>
    </teleport>
  </div>
</template>
<script setup>
import { models, torxPacks } from "@/js/models";
import ButtonRed from "./ButtonRed.vue";
import { addToCart, cart } from "@/js/cart";
import ButtonGray from "./ButtonGray.vue";
import ModelInfo from "../Popups/ModelInfo.vue";
import { reactive, shallowRef } from "vue";
import ThePopup from "../Popups/ThePopup.vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const notify = (modelName) => {
  toast(`Товар ${modelName} добавлен в корзину`, {
    theme: "dark",
    type: "default",
    autoClose: 2000,
  }); // ToastOptions
};

const popup = reactive({
  show: false,
  component: shallowRef(ModelInfo),
  content: null,
});

const openPopup = (model) => {
  popup.content = models.find((item) => (item.model = model));
  popup.show = true;
  console.log(model, popup.content, popup.show);
};

const buyDrill = (model) => {
  if (localStorage.getItem("userCart")) {
    try {
      parseInt(cart.items.find((item) => item.model === model.model).count++);
      localStorage.setItem("userCart", JSON.stringify(cart.items));
    } catch (err) {
      model.count = 1;
      cart.items.push(model);
      localStorage.setItem("userCart", JSON.stringify(cart.items));
    }
  } else {
    model.count = 1;
    cart.items.push(model);
    localStorage.setItem("userCart", JSON.stringify(cart.items));
  }

  notify(model.model);
};
</script>
<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
  padding-top: 150px;
}
.pack-card {
  color: #fff;
  padding-top: 50px;
  padding-bottom: 60px;
}
.buttons {
  display: flex;
  gap: 20px;
}
.pack-card {
  display: flex;
  width: 100%;
}
.separator {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.features {
  display: flex;
  width: 100%;
  justify-content: space-between;
  .feature {
    margin-top: 30px;
    width: 30%;
    border: 1px solid #fff;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 16px;
    margin-bottom: 20px;
    .heading {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    .description {
      font-size: 14px;
    }
  }
}
.text {
  width: 100%;
  .includes {
    display: flex;
    gap: 50px;
    margin-top: 10px;
  }
  h3 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 35px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
    justify-content: space-between;
    span {
      -webkit-text-stroke: 0;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      position: relative;
      background-color: red;
      padding: 4px 12px;
    }
  }
  ul {
    box-sizing: border-box;
    margin-left: 20px;
    margin-bottom: 40px;
  }
}
.images {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: end;

  .model,
  .all,
  .pack {
    position: relative;
    bottom: 0;
  }
  .model {
    z-index: 3;
    left: 0;
    img {
      max-width: 300px;
    }
  }

  .all {
    position: absolute;
    z-index: 2;
    top: -8%;
    left: 0%;
    img {
      max-width: 350px;
    }
  }

  .pack {
    z-index: 4;
    img {
      max-width: 600px;
    }
  }
}
@media screen and (max-width: 500px) {
  h2 {
    font-size: 25px;
    margin-bottom: 10px !important;
  }
  .pack-card {
    padding-top: 0;
    padding-bottom: 50px;
    flex-wrap: wrap;
  }
  .features {
    flex-wrap: wrap;
    .feature {
      width: 100%;
    }
  }
  .text {
    h2 {
      font-size: 16px;
      font-weight: 600;
      -webkit-text-stroke: 0;
      color: #fff;
      box-sizing: border-box;
      span {
        font-size: 12px;
        left: 0;
        white-space: nowrap;
      }
    }
    .includes {
      flex-wrap: wrap;
      margin-bottom: 40px;
      gap: 0;
      ul {
        margin-bottom: 0;
      }
    }
  }
  .images {
    .all {
      top: 12%;
      img {
        width: 70%;
      }
    }
    .pack {
      img {
        width: 100%;
      }
    }
  }
}
</style>
