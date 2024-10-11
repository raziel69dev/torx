<template>
  <section>

    <div class="logo">
      <router-link to="/">
        <TheLogotype />
      </router-link>

    </div>
    <div class="menu">
      <Menu />
    </div>
  </section>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "BaseHeader.vue",
  components: {
    TheLogotype: defineAsyncComponent({
      loader: () => import('@/assets/TheLogotype.vue')
    }),
    Menu: defineAsyncComponent({
      loader: () => import('@/Layout/TemplateParts/BaseHeaderMenu.vue')
    })
  }

}
</script>

<style scoped lang="scss">

section {
  display: flex;
  align-items: end;

  .logo {
    flex-basis: 30%;
  }
  .menu {
    flex-basis: 70%;
  }

}

</style>