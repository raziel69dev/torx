import {reactive} from "vue";

export const menuItems = reactive([
    {
        name: 'промо',
        href: '#promo',
        active: false
    },{
        name: 'модели',
        href: '#models',
        active: false
    },{
        name: 'о TORX',
        href: '#about',
        active: false
    },
])
// {
//     name: 'где купить',
//     href: '#where-to-buy',
//     active: false
// },{
//     name: 'контакты',
//     href: '#contacts',
//     active: false
// }