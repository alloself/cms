<template>
    <div class="app-tabs">
        <div class="grid mb-8 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-26px leading-tight">
            <div
                v-for="(tab, index) in tabs"
                :class="{ 'is-active': value === tab.value }"
                :key="index"
                @click="selectTab(tab)"
                class="cursor-pointer flex items-center justify-center transition hover:bg-brand dark:hover:bg-brand shadow-md px-5 py-5 bg-main text-white rounded-xl dark:bg-main-20 md:p-8 md:pt-8"
            >
                {{ tab.title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['tabs', 'value'],
    methods: {
        selectTab(selectedTab) {
            this.$emit('input', selectedTab.value === this.value ? null : selectedTab.value);
        },
    },
};
</script>
<style lang="scss">
.is-active {
    background: theme('colors.brand') !important;
}
</style>
