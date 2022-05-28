<template>
    <ul class="app-side-menu bg-secondary dark:bg-block-20 p-5 pl-0 text-18px h-full space-y-5">
        <li><router-link active-class="text-brand" exact to="/">Кошелек</router-link></li>
        <li><router-link active-class="text-brand" to="/referrals">Рефералы</router-link></li>
        <li><router-link active-class="text-brand" to="/information">Информация</router-link></li>
        <li><router-link active-class="text-brand" to="/instruction">Инструкция</router-link></li>
        <li><router-link active-class="text-brand" to="/support">Поддержка</router-link></li>
    </ul>
</template>

<style lang="scss">
.app-side-menu {
    position: relative;
    z-index: 5;

    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        right: 0;
        top: 0;
        bottom: 0;
        width: 7000px;
        background: #ededed;
    }
}
.dark .app-side-menu:before {
    background: #282828;
}
</style>
