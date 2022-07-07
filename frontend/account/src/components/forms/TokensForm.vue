<template>
    <div >
        <div class="text-24px xl:text-34px font-medium mb-6 dark:text-secondary">Вывод средств</div>
        <form @submit.prevent="handleSubmit">
            <div class="mb-6">
                <input
                    name="amount"
                    v-model="form.amount"
                    required
                    class="mb-4 outline-none w-full text-black py-3 px-5 border-2 border-secondary-10 dark:border-secondary rounded-full bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white"
                    type="number"
                    placeholder="Количество"
                />
                <input
                    v-model="form.wallet"
                    required
                    name="wallet"
                    class="mb-4 outline-none w-full text-black py-3 px-5 border-2 border-secondary-10 dark:border-secondary rounded-full bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white"
                    type="text"
                    placeholder="Адрес кошелька"
                />
            </div>
            <div class="flex">
                <button
                    type="submit"
                    class="outline-none px-6 py-2 rounded-34px bg-brand hover:bg-brand-10 text-white text-18px self-stretch w-full"
                >
                    Отправить заявку
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: {},
    }),
    methods: {
        handleSubmit() {},
    },
};
</script>
