<template>
  <nav>
    <div class="menu-item">
      <div class="items">
        <MenuItem v-for="item of menuItems" :key="item" :link="item" />
      </div>

      <div class="icons">
        <span class="counter" @click="popup.show = true">{{ cart.items.length }}</span>
        <svg
          @click="popup.show = true"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
        >
          <path
            d="M15.3656 8.63985V5.36563C15.3656 2.95456 13.4111 1 11 1C8.58893 1 6.63437 2.95456 6.63437 5.36563V8.63985M1.82345 10.1154L1.1686 17.1004C0.982412 19.0864 0.889316 20.0795 1.21886 20.8465C1.50835 21.5202 2.01566 22.0773 2.65948 22.4285C3.39237 22.8282 4.38974 22.8282 6.38449 22.8282H15.6155C17.6103 22.8282 18.6076 22.8282 19.3405 22.4285C19.9843 22.0773 20.4916 21.5202 20.7811 20.8465C21.1107 20.0795 21.0176 19.0864 20.8314 17.1004L20.1766 10.1154C20.0193 8.43832 19.9407 7.59978 19.5636 6.96581C19.2314 6.40747 18.7406 5.96057 18.1537 5.68197C17.4873 5.36563 16.6451 5.36563 14.9607 5.36563L7.03933 5.36563C5.3549 5.36563 4.51269 5.36563 3.84628 5.68197C3.25937 5.96057 2.76861 6.40747 2.43644 6.96581C2.05929 7.59978 1.98067 8.43832 1.82345 10.1154Z"
            stroke="#C5C5C5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <a href="tel:8 (495) 645-79-85">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M6.45059 7.29866C7.14659 8.74828 8.09537 10.1069 9.29695 11.3085C10.4985 12.5101 11.8572 13.4589 13.3068 14.1549C13.4315 14.2147 13.4938 14.2447 13.5727 14.2677C13.8531 14.3494 14.1973 14.2907 14.4348 14.1207C14.5016 14.0728 14.5587 14.0157 14.673 13.9014C15.0226 13.5518 15.1975 13.377 15.3732 13.2627C16.0361 12.8317 16.8907 12.8317 17.5536 13.2627C17.7294 13.377 17.9042 13.5518 18.2538 13.9014L18.4486 14.0962C18.9801 14.6277 19.2458 14.8934 19.3902 15.1788C19.6772 15.7463 19.6772 16.4166 19.3902 16.9842C19.2458 17.2695 18.9801 17.5353 18.4486 18.0667L18.291 18.2243C17.7614 18.754 17.4966 19.0188 17.1365 19.221C16.737 19.4455 16.1165 19.6068 15.6583 19.6054C15.2454 19.6042 14.9632 19.5241 14.3987 19.3639C11.3653 18.5029 8.50295 16.8785 6.11497 14.4905C3.72699 12.1025 2.10252 9.24014 1.24155 6.20675C1.08134 5.6423 1.00124 5.36008 1.00001 4.94713C0.998645 4.48891 1.16001 3.86842 1.38443 3.46891C1.58668 3.10888 1.85149 2.84407 2.38111 2.31445L2.53874 2.15681C3.07019 1.62537 3.33591 1.35965 3.62129 1.2153C4.18885 0.928232 4.85912 0.928232 5.42668 1.2153C5.71206 1.35965 5.97778 1.62537 6.50922 2.15681L6.70409 2.35168C7.0537 2.70129 7.2285 2.87609 7.34279 3.05187C7.77378 3.71476 7.77378 4.56934 7.34278 5.23223C7.2285 5.40801 7.0537 5.58281 6.70409 5.93242C6.58978 6.04673 6.53262 6.10388 6.48478 6.1707C6.31477 6.40813 6.25607 6.75239 6.33779 7.03274C6.36079 7.11163 6.39072 7.17397 6.45059 7.29866Z"
              stroke="#C5C5C5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
    <teleport to="main">
      <the-popup v-if="popup.show" @closePopup="popup.show = false">
        <cart />
      </the-popup>
    </teleport>
  </nav>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { menuItems } from "@/js/menuItems.js";
import { cart } from "@/js/cart.js";
import ThePopup from "../Popups/ThePopup.vue";
import Cart from "../Popups/Cart.vue";

export default {
  name: "BaseHeaderMenu.vue",
  components: {
    MenuItem: defineAsyncComponent({
      loader: () => import("@/Layout/TemplateParts/BaseHeaderMenuItem.vue"),
    }),
    ThePopup,
    Cart,
  },
  data() {
    return {
      popup: {
        show: false,
      },
      menuItems,
      cart,
    };
  },
};
</script>

<style scoped lang="scss">
.menu-item {
  display: flex;
  gap: 25px;
  justify-content: end;
  align-items: center;
}

.icons {
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  gap: 25px;
  box-sizing: border-box;
  position: relative;
  .counter {
    position: absolute;
    left: 25%;
    top: 0;
    font-size: 10px;
    color: #fff;
    background-color: red;
    padding: 2px 5px;
    border-radius: 20px;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
    path {
      transition: 0.3s ease;
    }
    &:hover {
      path {
        stroke: #e7e7e7;
      }
    }
  }
}
.items {
  display: flex;
  gap: 20px;
  white-space: nowrap;
}
@media screen and (max-width: 500px) {
  .items {
    display: none;
  }
}
</style>
