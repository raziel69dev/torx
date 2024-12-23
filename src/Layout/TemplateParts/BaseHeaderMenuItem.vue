<template>
  <div class="link">
    <router-link
      :to="$props.link.href"
      :class="{ active: $props.link.active }"
      @click="onActiveSet($props.link.name)"
    >
      {{ $props.link.name }}
    </router-link>
    <span class="border" v-show="$props.link.active"></span>
  </div>
</template>

<script>
import { menuItems } from "@/js/menuItems.js";

export default {
  name: "BaseHeaderMenuItem.vue",
  props: {
    link: {
      name: null,
      href: null,
    },
  },
  data() {
    return {
      active: true,
    };
  },
  methods: {
    onActiveSet(link) {
      for (let item of menuItems) {
        item.name === link ? (item.active = true) : (item.active = false);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.link {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  transition: 0.3s ease;
  width: 100%;

  a {
    color: #b5b5b5;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: 0.3s ease;
    text-decoration: none;
    width: 100%;

    &:hover {
      color: #e7e7e7;
    }
  }

  .border {
    transition: 0.3s ease;
    border-radius: 5px;
    background: #f00;
    width: 30px;
    height: 2px;
    flex-shrink: 0;
    display: inline-block;
    text-align: center;
    position: relative;
    margin-top: 5px;
    box-sizing: border-box;
    animation: 0.3s ease-in-out fadeIn;

    @keyframes fadeIn {
      0% {
        visibility: hidden;
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .link {
    a {
      font-size: 12px;
      display: none;
    }
  }
}
</style>
