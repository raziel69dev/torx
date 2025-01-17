<template>
  <section>
    <div class="logo">
      <router-link to="#promo">
        <TheLogotype />
      </router-link>
      <button-red href="#video" hrefType="internal"> Смотрите видео </button-red>
    </div>

    <div class="menu">
      <Menu />
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent } from "vue";
import ButtonRed from "./ButtonRed.vue";
export default {
  name: "BaseHeader.vue",
  components: {
    TheLogotype: defineAsyncComponent({
      loader: () => import("@/assets/TheLogotype.vue"),
    }),
    Menu: defineAsyncComponent({
      loader: () => import("@/Layout/TemplateParts/BaseHeaderMenu.vue"),
    }),
    ButtonRed,
  },
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  .logo {
    flex-basis: 30%;
    display: flex;
    gap: 60px;
    align-items: center;
  }
  .menu {
    flex-basis: 70%;
  }
}

@media screen and (max-width: 500px) {
  section {
    padding: 10px;
    .logo {
      gap: 10px;
      flex-basis: 25%;
    }
  }
}
</style>
