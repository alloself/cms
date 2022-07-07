<template>
    <div v-show="isActive"><slot></slot></div>
</template>
<script>
export default {
    props: ['name', 'selected'],
    data() {
        return { isActive: false };
    },
    mounted() {
        this.isActive = this.selected;
    },
};
</script>
