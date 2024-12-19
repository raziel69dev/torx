<template>
  <div class="drill-wrapper">
    <div class="drill-content" v-if="$props.model">
      <div class="slogan">
        <div class="rect"></div>
        <span>и все закрутится</span>
      </div>

      <div class="drill-name">
        {{ $props.model.name }}
      </div>
      <div class="drill-features">
        <div class="feature" v-for="feature of $props.model.features" :key="feature">
          <div class="icon">
            <img :src="feature.icon" alt="" />
          </div>

          <span class="tech">{{ feature.tech }}</span>
          <span class="name">{{ feature.name }}</span>
        </div>

        <div class="model-name">
          {{ $props.model.model }}
        </div>
      </div>
      <div class="drill-advanced" style="margin-top: 20px">
        <div class="advanced" v-for="advanced of $props.model.advanced" :key="advanced">
          <img :src="advanced.icon" alt="" />
          {{ advanced.name }}
        </div>
      </div>

      <div class="buttons" style="margin-top: 20px; display: flex; gap: 20px">
        <ButtonRed
          @buttonClicked="(popup.show = true), (popup.component = shallowRef(BuyModel))"
        >
          купить
        </ButtonRed>
        <ButtonGray
          @click="
            (popup.show = true),
              (popup.content = $props.model),
              (popup.component = shallowRef(ModelInfo))
          "
        >
          посмотреть характеристики
        </ButtonGray>
      </div>
    </div>
    <div class="drill-image">
      <img :src="$props.model.image" alt="" />

      <div class="colors">
        <div class="color" v-for="color of $props.model.colors" :key="color">
          <span class="round" :style="`background-color: ${color.color}`"></span>
          {{ color.where }}
        </div>
      </div>
    </div>

    <div class="op5">
      <the-blur-round :width="320" />
    </div>

    <the-popup v-if="popup.show" @closePopup="popup.show = false">
      <component
        :is="popup.component"
        :data="(popup.content = $props.model)"
        @closePopup="popup.show = false"
      />
    </the-popup>
  </div>
</template>
<script setup>
import theBlurRound from "@/Layout/TemplateParts/TheBlurRound.vue";
import ButtonRed from "@/Layout/TemplateParts/ButtonRed.vue";
import ButtonGray from "@/Layout/TemplateParts/ButtonGray.vue";
import { cart } from "@/js/cart.js";
import ThePopup from "@/Layout/Popups/ThePopup.vue";
import { reactive, shallowRef } from "vue";

import ModelInfo from "@/Layout/Popups/ModelInfo.vue";
import BuyModel from "../Popups/BuyModel.vue";

const props = defineProps({
  model: null,
});
function addToCart(model) {
  cart.push(model);
}

const popup = reactive({
  show: false,
  content: null,
  component: null,
});
</script>

<style lang="scss" scoped>
.op5 {
  opacity: 0.8;
  position: absolute;
  z-index: 0;
  left: 50%;
}
.drill-wrapper {
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.drill-content {
  color: #ffffff;
  width: 55%;
  position: relative;
  z-index: 2;

  .drill-name {
    color: #fff;
    font-family: "Gotham Pro";
    font-size: 46px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 20px;
    height: 170px;
  }
  .drill-features {
    display: flex;
    gap: 10px;
    position: relative;

    .model-name {
      -webkit-text-stroke: 1px #fff;
      color: transparent;
      font-family: "Gotham Pro";
      font-size: 120px;
      position: absolute;
      left: 450px;
      white-space: nowrap;
      word-break: keep-all;
      margin-top: -20px;
      font-style: italic;
      font-weight: 900;
    }

    .feature {
      overflow: hidden;
      border-radius: 30px;
      border: 2px solid #919191;
      background: rgba(0, 0, 0, 0.3);
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      cursor: default;
      transition: 0.3s ease;

      &:hover {
        background-color: #ff0000;
        .icon {
          img {
            filter: invert(30%);
          }
        }
        .tech,
        .name {
          color: #efefef;
        }
      }

      .icon {
        width: 50px;
        height: 50px;
        position: absolute;
        right: -10px;
        top: -10px;

        img {
          width: 100%;
          height: 100%;
          transition: 0.3s ease;
        }
      }

      .tech {
        text-align: center;
        font-family: "Gotham Pro";
        font-size: 36px;
        margin-top: 30px;
        font-style: normal;
        font-weight: 700;
        color: #cbcbcb;
        width: 100%;
        transition: 0.3s ease;
      }
      .name {
        color: #838383;
        text-align: center;
        font-family: "Gotham Pro";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        transition: 0.3s ease;
      }
    }
  }
}
.drill-image {
  position: relative;
  width: 45%;
  max-height: 500px;
  display: flex;
  align-items: end;
  justify-content: center;
  z-index: 2222;

  img {
    margin-left: 30px;
  }

  .colors {
    position: absolute;
    bottom: 20px;
    cursor: default;
    right: 20px;

    .color {
      width: 80px;
      color: #bebebe;
      font-family: "Gotham Pro";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      span {
        width: 15px;
        height: 15px;
        flex-shrink: 0;
        display: block;
        border-radius: 20px;
      }
    }
  }
}

.slogan {
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;

  .rect {
    width: 50%;
    height: 1px;
    background: #f00;
  }
  span {
    color: #fff;
    text-align: center;
    font-family: "Gotham Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

@media screen and (max-width: 500px) {
  .tabs .tabs-header .model-name {
    font-size: 24px;
  }

  .drill-wrapper {
    flex-wrap: wrap;
  }
  .drill-content {
    width: 100%;
    .drill-name {
      font-size: 24px;
      height: 100%;
    }
    .drill-features {
      .model-name {
        display: none;
      }
      .feature {
        height: 70px;
        border-radius: 10px;
        .name {
          font-size: 10px;
          margin-top: -5px;
        }
        .tech {
          font-size: 22px;
        }
      }
    }
  }
  .drill-image {
    width: 100%;

    .colors {
      left: 3%;
    }
    img {
      margin-left: 0;
      width: 100%;
    }
  }
}
</style>
