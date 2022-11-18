<template>
    <section class="side-bar">
        <h3>Поиск документа</h3>
        <label>
            <input type="number"
                   class="side-bar__input"
                   placeholder="Введите ID документа"
                   v-model="store.idDocument"
                   @input="store.fetchDocuments"
            />
        </label>

        <h3>Результаты</h3>

        <div v-if="store.loading">
            <div id="loader" >
                <div id="shadow"></div>
                <div id="box"></div>
            </div>
            <span>Поиск...</span>
        </div>

        <div class="side-bar__items" v-else-if="store.documents">
            <div class="side-bar__item"
                 v-for="document in store.documents"
                 :key="document.id"
                 @click="store.showCard = !store.showCard"
            >
                <div class="side-bar__item-left">
                    <img :src="document.image" :alt="document.name">
                </div>
                <div class="side-bar__item-right" :class="{'active': store.showCard}">
                    <span class="right-title"
                          v-text="document.name"
                          :class="{'active-title': store.showCard}"
                    ></span>
                    <span class="right-description"
                          :class="{'active-description': store.showCard}"
                    >12 MB</span>
                </div>
            </div>
        </div>

        <div v-if="!store.loading && store.messageError" v-text="store.messageError"></div>
    </section>
</template>

<script setup>
    import {useStore} from "@/store/documents"

    const store = useStore()
    store.fetchDocuments()
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .active {
        background: #0D6EFD !important;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        color: #F8F9FA;
        &-title {
            color: #fff !important;
        }
        &-description {
            color: #DEE2E6 !important;
        }
    }
    .side-bar {
        padding: 20px 20px 60px;
        border-right: 1px solid #E0E0E0;
        max-width: 282px;
        position: relative;
        & h3 {
            font-weight: 600;
            font-size: 16px;
            line-height: 140%;
            margin-top: 7px;
            margin-bottom: 14px;
        }
        & label {
            margin-bottom: 30px;
            display: block;
        }
        &__input {
            box-sizing: border-box;
            border: 1.5px solid #E9ECEF;
            border-radius: 8px;
            color: #6C757D;
            width: 100%;
            padding: 16px 24px;
            font-size: 14px;
            line-height: 17px;
        }
        &__items {
            gap: 18px 0;
            display: grid;
        }
        &__item {
            display: flex;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            cursor: pointer;
            &-left {
                width: 70px;
                height: 70px;
                border-right: 1px solid #E0E0E0;
                & img {
                    max-width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 10px 0 0 10px;
                }
            }
            &-right {
                padding: 15px;
                width: calc(100% - 70px);
            }
            .right {
                &-title {
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 17px;
                    color: #212529;
                    display: block;
                    margin-bottom: 6px;
                }
                &-description {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    color: #6C757D;
                }
            }
        }
    }

    #loader {
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 20px);
    }
    @keyframes loader {
        0% { left: -100px }
        100% { left: 110%; }
    }
    #box {
        width: 25px;
        height: 25px;
        background: #cecece;
        animation: animate .5s linear infinite;
        position: absolute;
        top: 54px;
        left: -40px;
        border-radius: 3px;
    }
    @keyframes animate {
        17% { border-bottom-right-radius: 3px; }
        25% { transform: translateY(9px) rotate(22.5deg); }
        50% {
            transform: translateY(18px) scale(1,.9) rotate(45deg) ;
            border-bottom-right-radius: 40px;
        }
        75% { transform: translateY(9px) rotate(67.5deg); }
        100% { transform: translateY(0) rotate(90deg); }
    }
    #shadow {
        width: 25px;
        height: 5px;
        background: #000;
        opacity: 0.1;
        position: absolute;
        top: 88px;
        left: -40px;
        border-radius: 50%;
        animation: shadow .5s linear infinite;
    }
    @keyframes shadow {
        50% {
            transform: scale(1.2,1);
        }
    }
</style>