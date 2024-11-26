import {reactive} from "vue";

export const cart = reactive([])

export function addToCart(model) {
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') ) : null

}