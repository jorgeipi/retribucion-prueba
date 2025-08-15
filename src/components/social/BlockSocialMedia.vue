<script setup>
// import BlockBtnSocialMedia from './BlockBtnSocialMedia.vue';
</script>

<template>
    <div class="block-socialmedia">
        <slot></slot>
    </div>
</template>


<style scoped lang="scss">
.block-socialmedia {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    overflow-x:hidden!important;

    padding: 0px 40px;

    gap: 20px;

    > * {
        margin: 0;
        padding: 0;
    }
}
</style>