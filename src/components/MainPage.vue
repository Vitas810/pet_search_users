<template>
    <section>
        <div class="card-empty" v-if="!store.showCard">
            <span>Выберите документ, чтобы посмотреть его содержиое</span>
        </div>

        <template v-else-if="store.showCard">
            <div class="card" v-for="document in store.documents" :key="document.id">
                <div class="card-image">
                    <img :src="document.image" :alt="document.name">
                </div>
                <div class="card-block">
                    <h3 class="card-block__title" v-text="document.name"></h3>
                    <div class="card-block__btns">
                        <button class="primary-outline">Скачать</button>
                        <button class="danger-outline">Удалить</button>
                    </div>
                    <h3 class="card-block__title">Описание:</h3>
                    <p class="card-block__description" v-text="document.description"></p>
                </div>
            </div>
        </template>
    </section>
</template>

<script setup>
    import {useStore} from "@/store/documents"
    const store = useStore()
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .danger-outline {
        color: #DC3545;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        padding: 7px 27px;
        background: transparent;
        border: 1px solid #DC3545;
        border-radius: 8px;
        cursor: pointer;
    }
    .primary-outline {
        color: #0D6EFD;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        padding: 7px 27px;
        background: transparent;
        border: 1px solid #0D6EFD;
        border-radius: 8px;
        cursor: pointer;
    }
    .card {
        display: grid;
        grid-template-columns: minmax(104px,424px) 1fr;
        gap: 0 60px;
        padding: 30px;
        &-image {
            max-width: 424px;
            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &-block {
            &__title {
                font-weight: 600;
                font-size: 16px;
                line-height: 140%;
                margin-top: 0;
                margin-bottom: 15px;
            }
            &__btns {
                display: flex;
                gap: 0 15px;
                margin-bottom: 47px;
            }
            &__description {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: #6C757D;
            }
        }
        &-empty {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
            height: 100%;
            & span {
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: #6C757D;
            }
        }

    }
</style>