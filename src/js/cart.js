import {reactive} from "vue";

export const cart = reactive({
    items: []
})

export function addToCart(model) {
    cart.items.push(model)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function removeFromCart(index) {
    cart.items.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
}