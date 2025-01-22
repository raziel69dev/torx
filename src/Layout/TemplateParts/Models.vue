<template>
  <div class="models-wrapper">
    <h2>Модели шуруповертов</h2>
    <div class="tabs" v-if="activeModel.model">
      <div class="tabs-header">
        <span
          class="model-name"
          :class="{ active: activeModel.model.name === model.name }"
          v-for="(model, index) of models"
          :key="model"
          @click="setModel(model, index)"
        >
          {{ model.model }}
        </span>
      </div>

      <transition-group
        class="tabs-body"
        tag="div"
        :class="{ animation: activeModel.animation }"
      >
        <DrillPreview
          :model="activeModel.model"
          @touchstart="
            (e) => {
              slider.initialPos = e.targetTouches[0].screenX;
              slider.slided = false;
            }
          "
          @touchmove="(e) => slideMobile(e)"
        />
      </transition-group>
    </div>
  </div>
</template>
<script setup>
import DrillPreview from "@/Layout/TemplateParts/DrillPreview.vue";
import { onMounted, reactive, ref } from "vue";
import { models } from "@/js/models";

const activeModel = reactive({
  model: null,
  index: null,
  animation: false,
});
const slider = reactive({
  initialPos: null,
  slided: false,
});
function setModel(model, index) {
  activeModel.model = model;
  activeModel.index = index;
}
const slideMobile = (e) => {
  if (
    e.targetTouches[0].screenX < slider.initialPos - 100 &&
    !slider.slided &&
    activeModel.index < models.length - 1
  ) {
    setAnimation();
    setTimeout(() => {
      setModel(models[activeModel.index + 1], activeModel.index + 1);
    }, 100);

    slider.slided = true;
    slider.initialPos = 0;
  } else if (
    e.targetTouches[0].screenX > slider.initialPos + 100 &&
    !slider.slided &&
    activeModel.index > 0
  ) {
    setAnimation();
    setTimeout(() => {
      setModel(models[activeModel.index - 1], activeModel.index - 1);
    }, 100);

    slider.slided = true;
    slider.initialPos = 0;
  }
};

const setAnimation = () => {
  activeModel.animation = true;
  setTimeout(() => {
    activeModel.animation = false;
  }, 300);
};
onMounted(() => {
  setModel(models[2], 2);
});
</script>
<style lang="scss" scoped>
h2 {
  text-align: center;
  margin-bottom: 10px;
}
.models-wrapper {
  margin-top: 150px;
  width: 100%;
  box-sizing: border-box;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.tabs {
  margin-top: 50px;
  .tabs-header {
    color: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid #434343;

    .model-name {
      position: relative;
      top: 2px;
      color: #fff;
      text-align: center;
      font-family: "Gotham Pro";
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      border-bottom: 3px solid transparent;
      transition: 0.3s ease;
      cursor: pointer;
      border-radius: 20px 20px 0 0;
      box-sizing: border-box;
      padding: 10px 20px;
      z-index: 5;
      border: 2px solid transparent;

      &.active {
        color: red;
        border: 2px solid #434343;
        border-bottom: 2px solid #121212;
      }
    }
  }
  .tabs-body {
    margin-top: 40px;
    transition: 0.3s ease;
    width: 100%;
    overflow: hidden;

    &.animation {
      transform: scale(0.8);
    }
  }
}

@media screen and (max-width: 500px) {
  h2 {
    font-size: 22px;
  }
  .models-wrapper {
    margin-top: 50px;
  }
}
</style>
