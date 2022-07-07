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
                            <li class="mr-8" v-for="item in items" :key="item.title">
                                <a href="#" class="hover:text-brand">Проект</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="flex items-center space-x-2">
                    <button
                        v-if="user"
                        class="hidden xl:block px-4 self-stretch rounded-34px bg-brand text-white"
                        @click="logout($router)"
                    >
                        Выйти
                    </button>
                    <router-link
                        v-else
                        class="hidden xl:flex px-4 self-stretch rounded-34px bg-brand text-white items-center"
                        :to="{ name: 'Login' }"
                    >
                        Войти
                    </router-link>
                    <button type="button" class="theme-switcher flex-none" @click="toggleTheme()">
                        <app-svg-icon iconName="theme-dark" iconClass="svg-icon--theme-dark"></app-svg-icon>
                        <app-svg-icon iconName="theme-light" iconClass="svg-icon--theme-light"></app-svg-icon>
                    </button>
                    <button type="button" class="language-switcher flex-none" @click="toggleLanguage()">
                        <span class="language-ru">Ru</span>
                        <span class="language-en">En</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { toggleTheme, toggleLanguage } from '../../../../shared/js/helpers/index';
import { showOffcanvas, showModal } from '../../../../shared/js/events/index';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Header',
    data() {
        return {
            mobileSearchVisible: false,
        };
    },
    computed: {
        ...mapState('auth', ['user', 'menu']),
        items() {
            return this.menu?.items || [];
        },
    },
    methods: {
        ...mapActions('auth', ['logout']),
        toggleTheme,
        showOffcanvas,
        showModal,
        toggleLanguage,
    },
};
</script>
