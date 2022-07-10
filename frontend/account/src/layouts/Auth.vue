<template>
    <main class="flex flex-col grid-rows-1 tracking-wider h-full" v-if="user && isEmailConfrimed">
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
                <button class="xl:block px-4 py-2 flex-1 rounded-34px bg-brand text-white" @click="logout($router)">
                    Выйти
                </button>
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
    <div class="flex flex-col items-center justify-center h-full w-full" v-else-if="user && !isEmailConfrimed">
        <h1 class="w-[300px]">Аккаунт не подтверждён,чтобы продолжить перейдите по ссылке из письма отправленного на <a class="text-brand" target="_blank" :href="`https://${user.email.split('@').pop()}`">адрес</a> указанный при регистрации.</h1>

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    methods: {
        ...mapActions('auth', ['logout']),
    },
    computed: {
        ...mapGetters('auth', ['user']),
        isEmailConfrimed() {
            return this.user && this.user.email_verified_at;
        },
    },
};
</script>
};
</script>
<style lang="scss" scoped>
main {
    flex: 1 0 auto;
}
</style>
