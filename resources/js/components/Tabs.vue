<template>
    <div class="app-tabs">
        <div class="grid mb-8 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-34px leading-tight">
            <div
                v-for="(tab, index) in tabs"
                :class="{ 'is-active': tab.isActive }"
                :key="index"
                @click="selectTab(tab)"
                class="cursor-pointer site-about-block__item transition hover:bg-brand dark:hover:bg-brand shadow-md px-5 py-8 bg-main text-white rounded-xl dark:bg-main-20 md:p-8 md:pt-24"
            >
                {{ tab.name }}
            </div>
        </div>
        <div class="p-5 bg-secondary rounded-lg dark:bg-block-20 lg:p-8 relative z-10 overflow-hidden">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { tabs: [] };
    },
    created() {
        this.tabs = this.$children;
    },
    mounted() {
        this.selectTab(this.tabs[0]);
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach((tab) => {
                tab.isActive = tab.name == selectedTab.name;
            });
        },
    },
};
</script>
