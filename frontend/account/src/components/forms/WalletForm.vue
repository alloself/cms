<template>
    <div>
        <div class="text-24px xl:text-34px font-medium mb-6 dark:text-secondary">Выберите сумму</div>
        <div class="flex flex-col items-start">
            <app-tabs :tabs="tabs" v-model="selectedAmount"> </app-tabs>
            <button
                @click="submitHandler"
                class="px-4 py-2 self-stretch rounded-34px bg-brand text-white disabled:bg-gray-400"
                v-if="selectedAmount"
            >
                Пополнить
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data: () => ({
        tabs: [
            {
                title: '50$',
                value: 50,
            },
            {
                title: '300$',
                value: 300,
            },
            {
                title: '1000$',
                value: 1000,
            },
            {
                title: '3500$',
                value: 3500,
            },
            {
                title: '15000$',
                value: 15000,
            },
        ],
        selectedAmount: null,
    }),
    methods: {
        ...mapActions('auth', ['toUpBalance']),
        async submitHandler() {
            await this.toUpBalance(this.selectedAmount.value);
            this.selectedAmount = null;
        },
    },
};
</script>
