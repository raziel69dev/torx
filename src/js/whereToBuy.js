import { reactive } from "vue";

import ozon from '@/assets/logos/ozon.svg';
import wb from '@/assets/logos/wb.svg';
import ym from '@/assets/logos/ymarket.svg';
import ptech from '@/assets/logos/ptech.svg';
import torx from '@/assets/logos/torx.svg';

export const whereToBuy = reactive([
    {
        logo: torx,
        when: 'Уже доступно',
        isDisabled: false,
        link: '#models'
    },
    {
        logo: ptech,
        when: 'Скоро',
        isDisabled: true,
        link: null,
    },
    {
        logo: ozon,
        when: 'Скоро',
        isDisabled: true,
        link: null,
    },
    {
        logo: wb,
        when: 'Скоро',
        isDisabled: true,
        link: null,
    },
    {
        logo: ym,
        when: 'Скоро',
        isDisabled: true,
        link: null,
    },
])