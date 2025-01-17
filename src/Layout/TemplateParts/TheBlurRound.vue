<template>
  <div class="round" :style="style">
    {{ this.$props.width }}
  </div>
</template>

<script>
export default {
  name: "TheBlurRound.vue",
  props: {
    width: 300,
  },
  data() {
    return {
      style: `width: ${this.$props.width}px; height: ${
        this.$props.width
      }px; filter: blur(${this.$props.width / 4}px); border-radius: ${
        this.$props.width / 2
      }px; `,
    };
  },
  watch: {
    width: function () {
      this.style = `width: ${this.$props.width}px; height: ${
        this.$props.width
      }px; filter: blur(${this.$props.width / 4}px); border-radius: ${
        this.$props.width / 2
      }px; `;
    },
  },
};
</script>

<style scoped>
.round {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  display: block;
  background: rgba(255, 0, 0, 0.4);

  animation: pulseAnim 10s infinite;
}

@keyframes pulseAnim {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
