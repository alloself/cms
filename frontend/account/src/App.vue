<template>
    <main class="flex flex-col grid-rows-1 tracking-wider">
        <app-svg-sprite></app-svg-sprite>
        <app-header></app-header>
        <div class="flex container mx-auto px-4 h-full">
            <div class="hidden xl:block xl:w-1/5">
                <app-aside-menu></app-aside-menu>
            </div>
            <div class="flex-1 py-5 xl:p-14">
                <router-view />
            </div>
        </div>
        <app-offcanvas>
            <div class="flex mb-8">
                <button class="xl:block px-4 py-2 flex-1 rounded-34px bg-brand text-white">Выйти</button>
            </div>
            <ul class="text-18px text-black">
                <li class="mb-4"><router-link active-class="text-brand" exact to="/">Кошелек</router-link></li>
                <li class="mb-4"><router-link active-class="text-brand" to="/referrals">Рефералы</router-link></li>
                <li class="mb-4"><router-link active-class="text-brand" to="/information">Информация</router-link></li>
                <li class="mb-4"><router-link active-class="text-brand" to="/instruction">Инструкция</router-link></li>
                <li><router-link active-class="text-brand" to="/support">Поддержка</router-link></li>
            </ul>
        </app-offcanvas>
        <!-- [+] modals -->
        <app-modal modal-name="wallet-modal">
            <app-wallet-form></app-wallet-form>
        </app-modal>
        <app-modal modal-name="tokens-modal">
            <app-tokens-form></app-tokens-form>
        </app-modal>
        <!-- [-] modals -->
    </main>
</template>
