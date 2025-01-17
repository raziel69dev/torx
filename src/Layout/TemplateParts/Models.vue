<template>
  <div class="models-wrapper">
    <h2>Модели шуруповертов</h2>
    <div class="tabs" v-if="activeModel.model">
      <div class="tabs-header">
        <span
          class="model-name"
          :class="{ active: activeModel.model.name === model.name }"
          v-for="model of models"
          :key="model"
          @click="setModel(model)"
        >
          {{ model.model }}
        </span>
      </div>

      <transition-group class="tabs-body" tag="div">
        <DrillPreview :model="activeModel.model" />
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
});

function setModel(model) {
  activeModel.model = model;
  //swap models code here
  console.log(model, activeModel);
}
onMounted(() => {
  setModel(models[2]);
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
  .tabs-header {
    color: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #434343;

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

      &.active {
        border-bottom-color: #ff0000;
      }
    }
  }
  .tabs-body {
    margin-top: 40px;
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
