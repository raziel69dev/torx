import {reactive} from "vue";

export const cart = reactive({
    items: []
})

export function addToCart(model) {
    
    const findModel = cart.items.find(item => item.name === model.name) || null
    
    if (findModel) {
        if (findModel.count) {
            findModel.count += 1
        } else {
            findModel.count = 1
        }

    } else {
        cart.items.push(model)
    }
    
    localStorage.setItem('userCart', JSON.stringify(cart))
}

export function removeFromCart(index) {
    cart.items.splice(index, 1)
    localStorage.setItem('userCart', JSON.stringify(cart))
}