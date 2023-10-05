<template>
    <section>
        <div class="card-empty" v-show="!showCard">
            <span>Выберите пользователя, чтобы посмотреть его профиль</span>
        </div>

        <div class="card" v-show="showCard">
            <div class="card-image">
                <img src="/user_icon.png" :alt="activeUser?.value?.name">
            </div>
            <div class="card-block">
                <h3 class="card-block__title" v-text="activeUser?.value?.name"></h3>
                <div class="card-block__contact">
                    <span><b>Телефон:</b></span>
                    <a :href="`tel:${activeUser?.value?.phone}`"
                        v-text="activeUser?.value?.phone"
                    ></a>
                </div>
                <div class="card-block__contact">
                    <span><b>Email:</b></span>
                    <a :href="`mailto:${activeUser?.value?.email}`"
                        v-text="activeUser?.value?.email"
                    ></a>
                </div>
                <div class="card-block__contact">
                    <span><b>Website:</b></span>
                    <a :href="`https://${activeUser?.value?.website}`"
                        v-text="activeUser?.value?.website"
                        target="_blanc"
                    ></a>{{ store.search }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { inject, watch, ref } from 'vue';
    import {useStore} from "@/store/documents";
    import { storeToRefs } from 'pinia'

    const store = useStore();
    const { search } = storeToRefs(store)
    const activeUser = inject('activeUser')
    let showCard = ref(false);

    watch(search, () => {
            showCard = false
        },
    )
    watch(activeUser, (user) => {
            if (Object.keys(user).length > 0) {
                showCard = true
            }
        },
    )
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
        grid-template-columns: minmax(104px, 224px) 1fr;
        gap: 0 60px;
        padding: 30px;
        &-image {
            max-width: 224px;
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
            &__contact {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: #6C757D;
                display: flex;
                gap: 6px;
                margin-top: 10px;
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