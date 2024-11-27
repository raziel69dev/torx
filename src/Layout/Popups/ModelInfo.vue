<template>
    <div class="model-info">

        <div class="model-info_heading">
            Характеристики
        </div>
        <div class="model-info_data-wrapper">
            <div class="model-info_data">
                <div class="data-name">
                    Крутящий момент <br>
                    Ступеней крутящего момента <br>
                    Напряжение <br>
                    Тип аккумулятора  
                </div>
                <div class="data-data">
                    {{ props.data.specified.nm }} <br>
                    {{ props.data.specified.speeds }} <br>
                    {{ props.data.specified.power }} <br>
                    {{ props.data.specified.battery }}
                </div>
            </div>

            <div class="model-info_data">
                <div class="data-name">
                    Тип двигателя <br>
                    Тип патрона <br>
                    Ударная функция <br>
                    Наличие реверса
                </div>
                <div class="data-data">
                    {{ props.data.specified.motorType }} <br>
                    {{ props.data.specified.headType }} <br>
                    {{ props.data.specified.drill }} <br>
                    {{ props.data.specified.reverse }} 
                </div>
            </div>

            <div class="model-info_data">
                <div class="data-name">
                    Наличие подстветки <br>
                    Частота вращения <br>
                    Количество аккумуляторов
                </div>
                <div class="data-data">
                    {{ props.data.specified.flash }} <br>
                    {{ props.data.specified.spin }} <br>
                    {{ props.data.specified.batteryCount }} <br>
                </div>
            </div>

            <div class="model-info_data">
                <div class="data-model">
                    {{  props.data.model }}
                </div>
                
            </div>

        </div>

    </div>
</template>
<script setup>
import { models } from '@/js/models';


const props = defineProps({
    data: null
})
</script>
<style lang="scss" scoped>
.model-info {
    width: 100%;

    .model-info_heading {
            color: #FFF;
            font-family: "Gotham Pro";
            font-size: 46px;
            font-style: italic;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 20px;
        }

    .model-info_data-wrapper {
        width: 100%;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: space-between;


        .model-info_data {
            display: flex;
            position: relative;
            height: fit-content;
            box-sizing: border-box;
            .data-name {
                color: #FFF;
                font-family: "Gotham Pro";
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 26px; /* 162.5% */
            }
            .data-data {
                color: #FFF;
                text-align: right;
                font-family: "Gotham Pro";
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 26px; /* 162.5% */
            }
            .data-model {
                -webkit-text-stroke-width: 1;
                -webkit-text-stroke-color: #FFF;
                font-family: "Gotham Pro";
                font-size: 90px;
                font-style: italic;
                font-weight: 700;
                line-height: normal;
                position: relative;
                float: right;
                width: 100%;
            }
        }
    }
}
    
</style>