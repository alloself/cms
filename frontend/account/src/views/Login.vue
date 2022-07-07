<template>
    <main class="flex flex-col grid-rows-1 tracking-wider">
        <app-header></app-header>
        <div class="flex container mx-auto px-4 h-full">
            <div class="flex flex-col w-full mt-10">
                <h1 class="mb-4 text-2xl font-bold">Вход</h1>
                <form class="md:w-1/2" @submit.prevent="handleSubmit">
                    <div class="mb-6">
                        <input
                            name="email"
                            v-model="form.email"
                            required
                            class="mb-4 outline-none w-full text-black py-3 px-5 border-2 border-secondary-10 dark:border-secondary rounded-full bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white"
                            type="email"
                            placeholder="Почта"
                        />

                        <input
                            v-model="form.password"
                            required
                            name="password"
                            class="mb-4 outline-none w-full text-black py-3 px-5 border-2 border-secondary-10 dark:border-secondary rounded-full bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white"
                            type="password"
                            placeholder="Пароль"
                        />
                    </div>
                    <div class="flex">
                        <button
                            type="submit"
                            class="outline-none px-6 py-2 rounded-34px bg-brand hover:bg-brand-10 text-white text-18px mr-4"
                        >
                            Войти
                        </button>
                        <router-link
                            :to="{ name: 'Registration' }"
                            class="outline-none px-6 py-2 rounded-34px bg-brand hover:bg-brand-10 text-white text-18px"
                        >
                            Регистрация
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data: () => ({
        form: {},
    }),
    methods: {
        ...mapActions('auth', ['login']),
        async handleSubmit() {
            try {
                await this.login(this.form);
                this.$router.push({ name: 'Wallet' });
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>
<style lang="scss" scoped></style>
