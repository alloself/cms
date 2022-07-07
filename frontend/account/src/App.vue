<template>
    <div>
        <app-svg-sprite></app-svg-sprite>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
</style>
