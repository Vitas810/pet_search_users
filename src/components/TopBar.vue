<template>
    <header class="header">
        <h1>CRM</h1>
        <div class="header-block">
            <h4 class="header-block__name">Username</h4>
        </div>
    </header>
</template>

<script>
export default {
    name: 'ToolBar',
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
        @media(max-width: 600px) {
            margin-bottom: 5px;
        }
        & h1 {
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
            color: #000000;
            margin-top: 0;
        }
        &-block {
            &__name {
                margin-top: 10px;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #000000;
            }
        }
    }
</style>