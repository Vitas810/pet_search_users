<template>
    <tool-bar/>
    <main class="main-page">
        <side-bar />
        <main-page/>
    </main>
</template>

<script setup>
    import SideBar from "@/components/SideBar";
    import MainPage from "@/components/MainPage";
    import ToolBar from "@/components/TopBar";
    import { provide, ref } from 'vue';

    const activeUser = ref({});
    provide('activeUser', activeUser.value)

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .main-page {
        display: grid;
        grid-template-columns: 282px 1fr;
        background: #FDFDFD;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        height: 60vh;
    }
</style>