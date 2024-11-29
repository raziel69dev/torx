<template>
  <section>
    <div class="slider-wrapper noselect">
      <div class="slider" ref="slider" :style="styles">
        <div class="slide" @drag="onDrag" v-for="slide of slides" :key="slide">
          <img :src="slide" alt="" />
        </div>
      </div>
    </div>

    <div class="nav">
      <div class="arrows">
        <svg
          @click="prev()"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="22"
          viewBox="0 0 12 22"
          fill="none"
        >
          <path
            d="M11 21L1 11L11 1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          @click="next()"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="22"
          viewBox="0 0 12 22"
          fill="none"
        >
          <path
            d="M1 1L11 11L0.999998 21"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="dots">
        <div
          class="dot"
          v-for="(dot, index) of slides.length"
          :class="{ active: index === this.step }"
          :key="index"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
import slide1 from "@/assets/images/slide1.jpg";
import slide2 from "@/assets/images/slide2.jpg";
export default {
  name: "BaseSlider.vue",
  data() {
    return {
      slides: [slide1, slide2],
      step: 0,
      styles: ``,
    };
  },
  methods: {
    onDrag(e) {
      console.log(1);
      console.log(e);
    },
    next() {
      if (this.step === this.slides.length - 1) {
        this.step = 0;
      } else if (this.step < this.slides.length) {
        this.step++;
      }

      const wrapperWidth = this.$refs.slider.clientWidth;
      this.styles = `transform: translateX(-${wrapperWidth * this.step}px);`;
    },
    prev() {
      if (this.step === 0) {
        this.step = this.slides.length - 1;
      } else if (this.step < this.slides.length) {
        this.step--;
      }

      const wrapperWidth = this.$refs.slider.clientWidth;
      this.styles = `transform: translateX(-${wrapperWidth * this.step}px);`;
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  margin-top: 10px;
  padding: 10px 20px;

  .arrows {
    display: flex;
    gap: 40px;
  }
}
.slider-wrapper {
  width: 100%;
  background-color: #000000;
  border-radius: 40px;
  aspect-ratio: 2 / 1;
  overflow: hidden;
  margin-top: 30px;
  box-sizing: border-box;
}
.slider {
  position: relative;
  z-index: 1;
  max-height: 100%;
  display: flex;
  transition: 0.3s ease;
  height: 100%;
  width: 100%;

  .slide {
    width: 100%;
    height: 100%;

    img {
      height: 100%;
      -webkit-user-drag: none;
    }
  }
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .arrows {
    svg {
      cursor: pointer;
    }
  }
  .dots {
    display: flex;
    gap: 10px;
    .dot {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
      border: 1px solid #ffffff;
      stroke: #fff;
      border-radius: 20px;
      transition: 0.3s ease;
      background-color: transparent;

      &.active {
        background-color: #ffffff;
      }
    }
  }
}
</style>
