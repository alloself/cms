<template>
    <header class="site-header py-4 shadow-md sticky top-0 z-40 bg-secondary dark:bg-block-20">
        <div class="relative container mx-auto px-4">
            <div class="flex items-center justify-between">
                <div @click="showOffcanvas()" class="cursor-pointer svg-icon w-8 h-8 xl:hidden">
                    <svg><use xlink:href="#menu"></use></svg>
                </div>
                <div class="flex items-center">
                    <a href="/" class="flex-none block site-logo italic text-brand text-26px md:text-34px leading-34px">
                        <strong class="font-black">Union</strong>
                        <span>Capital</span>
                    </a>
                    <nav class="site-top-nav flex-none hidden xl:block ml-8">
                        <ul class="flex text-16px dark:text-white">
                            <li class="mr-8">
                                <a href="#" class="hover:text-brand">Проект</a>
                            </li>
                            <li class="mr-8">
                                <a href="#" class="hover:text-brand">Новости</a>
                            </li>
                            <li class="mr-8">
                                <a href="#" class="hover:text-brand">Помощь</a>
                            </li>
                            <li class="mr-8">
                                <a href="#" class="hover:text-brand">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="flex items-center space-x-2">
                    <form
                        data-site-search
                        action="#"
                        class="site-search flex-none"
                        :class="{ 'is-visible': mobileSearchVisible }"
                    >
                        <input type="text" placeholder="Поиск" required />
                        <button type="submit">
                            <app-svg-icon iconName="search"></app-svg-icon>
                        </button>
                    </form>
                    <!-- <button
                        @click="showModal('login-modal')"
                        class="hidden xl:block px-4 self-stretch rounded-34px border border-2 border-secondary-10"
                    >
                        Войти
                    </button> -->
                    <button class="hidden xl:block px-4 self-stretch rounded-34px bg-brand text-white">Выйти</button>
                    <div
                        @click="mobileSearchVisible = !mobileSearchVisible"
                        class="round-icon flex-none xl:hidden"
                        data-site-search-mobile-trigger
                        :class="{ 'is-active': mobileSearchVisible }"
                    >
                        <app-svg-icon iconName="search-brand"></app-svg-icon>
                    </div>
                    <button type="button" class="theme-switcher flex-none" @click="toggleTheme()">
                        <app-svg-icon iconName="theme-dark" iconClass="svg-icon--theme-dark"></app-svg-icon>
                        <app-svg-icon iconName="theme-light" iconClass="svg-icon--theme-light"></app-svg-icon>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { toggleTheme } from '../../../../shared/js/helpers/index';
import { showOffcanvas, showModal } from '../../../../shared/js/events/index';

export default {
    name: 'Header',
    data() {
        return {
            mobileSearchVisible: false,
        };
    },
    methods: {
        toggleTheme,
        showOffcanvas,
        showModal,
    },
};
</script>
