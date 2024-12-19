<template>
  <div class="presentation">
    <div class="text">
      <div class="heading">посмотрите ознакомительную презентацию</div>
      <div class="buttons">
        <button-red :href="torxPres">
          посмотреть презентацию
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M13 5.00001L13 1.00001M13 1.00001H8.99999M13 1.00001L7 7M5.66667 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.07989 13 4.2 13H9.8C10.9201 13 11.4802 13 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C13 11.4802 13 10.9201 13 9.8V8.33333"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button-red>
      </div>
    </div>
    <div class="preview">
      <a :href="torxPres" target="_blank">
        <img :src="presPreview" alt="" />
        <svg
          class="link"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 7.00001L19 1.00001M19 1.00001H13M19 1.00001L10 10M8 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V12"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
    <the-blur-round :width="400" />
  </div>
</template>
<script setup>
import router from "@/router";
import ButtonGray from "./ButtonGray.vue";
import ButtonRed from "./ButtonRed.vue";
import TheBlurRound from "./TheBlurRound.vue";
import presPreview from "@/assets/images/pres_preview.png";
import torxPres from "@/assets/images/presentation.pdf";
import { useRouter } from "vue-router";
</script>
<style lang="scss" scoped>
.presentation {
  margin-top: 240px;
  box-sizing: border-box;
  padding: 30px;
  width: 100%;
  border-radius: 30px;
  background: #000;
  z-index: 100;
  position: relative;
  margin-bottom: 30px;

  .text {
    width: 70%;
    position: relative;
    z-index: 40;
    .heading {
      color: #fff;
      font-family: "Gotham Pro";
      font-size: 55px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 20px;
    }
    .buttons {
      display: flex;
      gap: 20px;
    }
  }
  .preview {
    right: 10%;
    position: absolute;
    float: right;
    top: -50%;
    z-index: 30;

    img {
    }
    .link {
      position: absolute;
      z-index: 50;
      right: 40%;
      bottom: 30%;
      width: 100%;
      height: 100%;

      width: 50px;
      height: 50%;
      transition: 0.3s ease;
      opacity: 0;

      path {
        stroke: #fff;
        stroke-width: 2px;
      }
    }

    &:hover {
      .link {
        opacity: 1;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .presentation {
    width: 100%;

    .text {
      width: 100%;
      .heading {
        font-size: 20px;
        text-align: center;
        width: 100%;
      }
      .buttons {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    .preview {
      margin-top: 50px;
      position: relative;
      left: -5%;
    }
  }
}
</style>
