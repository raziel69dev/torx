import {reactive} from "vue";
import protect from '@/components/icons/protect.svg'
import stop from '@/components/icons/stop.svg'
import voltage from '@/components/icons/voltage.svg'
import gear from '@/components/icons/gear.svg'
import speed from '@/components/icons/speed.svg'
import battery from '@/components/icons/battery.svg'

import cs12 from '@/assets/images/drills/cs12.png'
import cd12 from '@/assets/images/drills/cd12.png'
import cid21 from '@/assets/images/drills/cid21.png'

import cd12tc from '@/assets/images/drillpacks/9310215F.png'
import cd12acc from '@/assets/images/drillpacks/9310214E.png'
import cd12c from '@/assets/images/drillpacks/9310213F.png'
import cid21c from '@/assets/images/drillpacks/9310412E.png'
import all from '@/assets/images/drillpacks/9310215Q.png'

export const models = reactive([{
    model: 'CS-12',
    name: 'Шуруповерт',
    sku: 'арт. 9310211',
    features: {
        voltage: {
            tech: 12,
            name: 'вольт',
            icon: voltage
        },
        power: {
            tech: 22,
            name: 'Нм',
            icon: gear
        },
        spin: {
            tech: 600,
            name: 'об / мин',
            icon: speed
        },
        battery: {
            tech: 1.5,
            name: 'mAh',
            icon: battery
        }
    },
    advanced: [{
        name: 'Электронная защита от перегрузки',
        icon: protect
    },{
        name: 'Электронный тормоз двигателя',
        icon: stop
    }],
    image: cs12,
    specified: {
        nm: '22Нм',
        speeds: '18+1',
        power: '12В',
        battery: 'Li-Ion',
        flash: 'да',
        spin: '0-600',
        batteryCount: '1',
        motorType: 'щеточный',
        headType: 'бесключевой , быстрозажиной',
        drill: 'нет',
        reverse: 'да'
    },
    colors: [
        {
            color: 'red',
            where: 'красный пластиковый корпус'
        },
    ]
},
{
    model: 'CD-12',
    name: 'Дрель-шуруповерт',
    sku: 'арт. 9310212',
    features: {
        voltage: {
            tech: 12,
            name: 'вольт',
            icon: voltage
        },
        power: {
            tech: 25,
            name: 'Нм',
            icon: gear
        },
        spin: {
            tech: 1350,
            name: 'об / мин',
            icon: speed
        },
        battery: {
            tech: 1.5,
            name: 'mAh',
            icon: battery
        }
    },
    advanced: [{
        name: 'Электронная защита от перегрузки',
        icon: protect
    },{
        name: 'Электронный тормоз двигателя',
        icon: stop
    }],
    specified: {
        nm: '25Нм',
        speeds: '18+1',
        power: '12В',
        battery: 'Li-Ion',
        flash: 'да',
        spin: '0-1350',
        batteryCount: '1',
        motorType: 'щеточный',
        headType: 'бесключевой , быстрозажиной',
        drill: 'нет',
        reverse: 'да'
    },
    image: cd12,
    colors: [
        {
            color: 'black',
            where: 'черный пластиковый корпус'
        },{
            color: 'red',
            where: 'красная резиновая вставка'
        },
    ]
},
{
    model: 'CID-21',
    name: 'Ударная дрель-шуруповерт',
    sku: 'арт. 9310411',
    features: {
        voltage: {
            tech: 21,
            name: 'вольт',
            icon: voltage
        },
        power: {
            tech: 35,
            name: 'Нм',
            icon: gear
        },
        spin: {
            tech: 1550,
            name: 'об / мин',
            icon: speed
        },
        battery: {
            tech: 1.5,
            name: 'mAh',
            icon: battery
        }
    },
    advanced: [{
        name: 'Электронная защита от перегрузки',
        icon: protect
    },{
        name: 'Электронный тормоз двигателя',
        icon: stop
    }],
    specified: {
        nm: '25Нм',
        speeds: '25+1',
        power: '21В',
        battery: 'Li-Ion',
        flash: 'да',
        spin: '0-1550',
        batteryCount: '1',
        motorType: 'щеточный',
        headType: 'бесключевой , быстрозажиной',
        drill: 'да',
        reverse: 'да'
    },
    image: cid21,
    colors: [
        {
            color: 'black',
            where: 'черный пластиковый корпус'
        },{
            color: 'red',
            where: 'красная резиновая вставка'
        },
    ]
}])



export const torxPacks = reactive([
    {
        name: 'Набор инструментов в кейсе',
        model: 'CD-12TC',
        sku: 'арт. 9310215',
        drillModel: 'CD-12',
        image: cd12tc,
        images: {
            allImage: all,
            modelImage: cd12,
            packImage: cd12tc
        },
        includes: {
            left: [
                "Разводной ключ",
                "Молоток",
                "Плоскогубцы",
                "Изолента",
                "Индикаторная отвертка цифровая",
                "Отвертки 2шт",
            ],
            right: [
                "Вороток-отвертка",
                "Головки торцевые 7шт",
                "Биты 6шт",
                "Сверла 6 шт",
                "Рулетка 3м",
            ]
        }

    },
    {
        name: 'Набор бит и сверел с шуруповертом',
        model: 'CD-12ACC',
        sku: 'арт. 9310214',
        drillModel: 'CD-12',
        image: cd12acc,
        images: {
            allImage: all,
            modelImage: cd12,
            packImage: cd12acc
        },
        includes: {
            left: [
                "Разводной ключ",
                "Молоток",
                "Плоскогубцы",
                "Изолента",
                "Индикаторная отвертка цифровая",
                "Отвертки 2шт",
            ],
            right: [
                "Вороток-отвертка",
                "Головки торцевые 7шт",
                "Биты 6шт",
                "Сверла 6 шт",
                "Рулетка 3м",
            ]
        }

    },
    {
        name: 'Шуруповерт в кейсе с доп. АКБ',
        model: 'CD-12C',
        sku: 'арт. 9310213',
        drillModel: 'CD-12',
        image: cd12c,
        images: {
            allImage: all,
            modelImage: cd12,
            packImage: cd12c
        },
        includes: {
            left: [
                "Разводной ключ",
                "Молоток",
                "Плоскогубцы",
                "Изолента",
                "Индикаторная отвертка цифровая",
                "Отвертки 2шт",
            ],
            right: [
                "Вороток-отвертка",
                "Головки торцевые 7шт",
                "Биты 6шт",
                "Сверла 6 шт",
                "Рулетка 3м",
            ]
        }

    },
    {
        name: 'Шуруповерт в кейсе с доп. АКБ',
        model: 'CD-21C',
        sku: 'арт. 9310412',
        drillModel: 'CD-21',
        image: cid21c,
        images: {
            allImage: all,
            modelImage: cid21,
            packImage: cid21c
        },
        includes: {
            left: [
                "Разводной ключ",
                "Молоток",
                "Плоскогубцы",
                "Изолента",
                "Индикаторная отвертка цифровая",
                "Отвертки 2шт",
            ],
            right: [
                "Вороток-отвертка",
                "Головки торцевые 7шт",
                "Биты 6шт",
                "Сверла 6 шт",
                "Рулетка 3м",
            ]
        }

    },
])