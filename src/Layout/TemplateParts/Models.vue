<template>
  <div class="models-wrapper">
    <h2>модели шуруповертов</h2>
    <div class="tabs" v-if="activeModel.model">
      <div class="tabs-header">
        <span class="model-name"
              :class="{active: activeModel.name === model.name}"
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
import { onMounted, reactive } from "vue";
import { models } from "@/js/models";

const activeModel = reactive({
  model: null
})

function setModel(model) {
  activeModel.model = model
  //swap models code here
  console.log(model, activeModel)
}
onMounted(() => {
  setModel(models[0])
})
</script>
<style lang="scss" scoped>
h2 {
  text-align: center;
}
.models-wrapper {
  margin-top: 150px;
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
    color: #FFFFFF;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #434343;

    .model-name {
      position: relative;
      top: 2px;
      color: #FFF;
      text-align: center;
      font-family: "Gotham Pro";
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      border-bottom: 3px solid transparent;
      transition: .3s ease;
      cursor: pointer;

      &.active {
        border-bottom-color: #FF0000;
      }
    }
  }
  .tabs-body {
    margin-top: 40px;

  }
}
</style>