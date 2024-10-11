<template>
  <div class="models-wrapper">
    <h2>модели шуруповертов</h2>

    <div class="tabs" v-if="this.model">
      <div class="tabs-header">
        <span class="model-name"
              :class="{active: model.name === this.model.name}"
              v-for="model of models"
              @click="setModel(model)"
        >
          {{ model.model }}
        </span>
      </div>
      <div class="tabs-body">
        <DrillPreview :model="this.model" />
      </div>
    </div>

  </div>
</template>
<script>
import {models} from "@/js/models.js";
import DrillPreview from "@/Layout/TemplateParts/DrillPreview.vue";

export default {
  name: 'Models',
  components: {DrillPreview},
  data() {
    return {
      models,
      model: null
    }
  },
  methods: {
    setModel(model) {
      this.model = model
      //swap models code here
      console.log(model)
    }
  },
  mounted() {
    this.setModel(models[0])
  }
}
</script>
<style lang="scss" scoped>
h2 {
  text-align: center;
}
.models-wrapper {
  margin-top: 150px;
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