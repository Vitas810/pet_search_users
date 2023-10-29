<template>
    <tool-bar/>
    <main class="main-page">
        <side-bar />
        <main-page/>
    </main>
</template>

<script setup lang="ts">
    import sideBar from "./SideBar.vue";
    import mainPage from "./MainPage.vue";
    import ToolBar from "./TopBar.vue";
    import { provide, ref } from 'vue';

    const activeUser = ref<object>({});
    provide('activeUser', activeUser.value);

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .main-page {
        display: grid;
        grid-template-columns: 282px 1fr;
        background: #FDFDFD;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        height: 60vh;
        @media(max-width: 600px) {
            grid-template-columns: 1fr;
            height: inherit;
        }
    }
</style>