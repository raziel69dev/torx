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

export const models = reactive([{
    model: 'CS-12',
    name: 'ШУРУПОВЕРТ АККУМУЛЯТОРНЫЙ',
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
    name: 'ДРЕЛЬ-ШУРУПОВЕРТ АККУМУЛЯТОРНАЯ',
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
    name: 'УДАРНАЯ ДРЕЛЬ-ШУРУПОВЕРТ АККУМУЛЯТОРНАЯ',
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