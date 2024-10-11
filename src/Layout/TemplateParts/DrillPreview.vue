<template>
  <div class="drill-wrapper">
    <div class="slogan"></div>
    <div class="drill-content" v-if="$props.model" >
      <div class="drill-name">
        {{ $props.model.name }}

      </div>
      <div class="drill-features">
        <div class="feature" v-for="feature of $props.model.features">
          <div class="icon">
            <img :src=" feature.icon " alt="">
          </div>

          <span class="tech">{{ feature.tech }}</span>
          <span class="name">{{ feature.name }}</span>


        </div>

        <div class="model-name">
          {{ $props.model.model }}
        </div>

      </div>

    </div>
    <div class="drill-image">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vexels.com%2Fmerch%2Fpng%2Fpreview%2F&psig=AOvVaw0H01c2_bGnLA69aTFdWetF&ust=1728634615604000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCssPOvg4kDFQAAAAAdAAAAABAE" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'DrillPreview',
  props: {
    model: null
  }
}
</script>

<style lang="scss" scoped>
.drill-wrapper {
  display: flex;
  align-items: center;
}
.drill-content {
  color: #FFFFFF;
  width: 50%;
  .drill-name {
    color: #FFF;
    font-family: "Gotham Pro";
    font-size: 46px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 20px;
  }
  .drill-features {
    display: flex;
    gap: 10px;


    .model-name {
      -webkit-text-stroke: 1px #fff;
      color: transparent;
      font-family: "Gotham Pro";
      font-size: 120px;
      position: absolute;
      left: 550px;
      margin-top: -20px;
      font-style: italic;
      font-weight: 900;
    }

    .feature {
      overflow: hidden;
      border-radius: 30px;
      border: 2px solid #919191;
      background: rgba(0, 0, 0, 0.30);
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      cursor: default;
      transition: .3s ease;

      &:hover {
        background-color: #FF0000;
        .icon {
          img {
            filter: invert(30%);
          }
        }
        .tech, .name {
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
          transition: .3s ease;
        }
      }

      .tech {
        text-align: center;
        font-family: "Gotham Pro";
        font-size: 36px;
        line-height: 3.5;
        font-style: normal;
        font-weight: 700;
        color: #cbcbcb;
        width: 100%;
        transition: .3s ease;

      }
      .name {
        margin-top: -80px;
        color: #838383;
        text-align: center;
        font-family: "Gotham Pro";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        transition: .3s ease;
      }
    }
  }
}
</style>