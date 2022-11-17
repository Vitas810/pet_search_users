<template>
    <section class="side-bar">
        <h3>Поиск документа</h3>
        <label>
            <input type="number" class="side-bar__input" placeholder="Введите ID документа">
        </label>

        <h3>Результаты</h3>
        <div class="side-bar__items">
            <div class="side-bar__item">
                <div class="side-bar__item-left">
                    <img src="https://picsum.photos/430/290?1" alt="">
                </div>
                <div class="side-bar__item-right">
                    <span class="right-title">Документ 1</span>
                    <span class="right-description">12 MB</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SideBar',
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .active {
        background: #0D6EFD;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        color: #F8F9FA;
    }
    .side-bar {
        padding: 20px 20px 60px;
        border-right: 1px solid #E0E0E0;
        max-width: 282px;
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
        &__item {
            display: flex;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
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
</style>