import {reactive} from "vue";
import protect from '@/components/icons/protect.svg'
import stop from '@/components/icons/stop.svg'
import voltage from '@/components/icons/voltage.svg'
import gear from '@/components/icons/gear.svg'
import speed from '@/components/icons/speed.svg'
import battery from '@/components/icons/battery.svg'

export const models = reactive([{
    model: 'CS-12',
    name: 'АККУМУЛЯТОРНЫЙ ШУРУПОВЕРТ',
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
    colors: [
        {
            color: 'red',
            where: 'красный пластиковый корпус'
        },
    ]
}])