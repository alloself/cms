<template>
    <div>
        <h1 class="text-26px mb-10 xl:mb-15">Ваш баланс</h1>
        <div class="flex flex-col items-start mb-8 xl:mb-14" v-if="user">
            <div>
                <div class="text-56px xl:text-105px leading-normal font-meduim">{{ user.balance }}</div>
                <div class="flex justify-between">
                    <div class="mr-10">Токенов</div>
                    <div>1 Токен = 0.7 USDT</div>
                </div>
            </div>
        </div>
        <div class="md:flex font-medium">
            <button
                @click="showModal('wallet-modal')"
                class="w-full rounded-34px border-2 border-block-20 dark:border-secondary py-4 px-10 xl:px-20 text-18px xl:text-24px xl:w-auto"
            >
                Пополнить кошелек
            </button>
            <button
                @click="showModal('tokens-modal')"
                class="w-full rounded-34px border-2 border-block-20 dark:border-secondary py-4 px-10 xl:px-20 text-18px mt-5 md:mt-0 xl:text-24px md:ml-4 xl:w-auto"
            >
                Вывести токены
            </button>
        </div>
        <div class="pt-20 crypto-info">
            <div class="text-28px font-medium pb-2 border-b-2 border-secondary mb-6">Актуальный курс</div>
            <div class="space-y-5">
                <div
                    v-for="item in Object.keys(currency)"
                    :key="item"
                    class="crypto-info__item md:flex items-center justify-between"
                >
                    <div class="text-18px">
                        <div class="flex items-center">
                            <app-svg-icon iconClass="svg-icon--crypto mr-2 xl:mr-4" :iconName="item"></app-svg-icon>
                            <div class="flex items-center">
                                <span class="flex-none">{{ item }} Wallet</span>
                                <span class="flex-none text-brand ml-2">≈</span>
                                <span class="flex-none text-brand ml-2"
                                    >{{ currency[item].quote.USD.price.toFixed(2) }} USDT</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="flex ml-12 md:ml-0">
                        <div>{{ (currency[item].quote.USD.price.toFixed(2) * user.balance * 0.07) || 0 }} BTC</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { showModal } from '../../../../shared/js/events';
import { mapState } from 'vuex';
export default {
    methods: {
        showModal,
        async getCurrency() {
            const { data } = await this.$store.state.client.get('/currency');
            this.currency = data?.data || [];
        },
    },
    data: () => ({
        currency: [],
    }),
    computed: {
        ...mapState('auth', ['user']),
    },
    created() {
        this.getCurrency();
        const id = setInterval(() => {
            this.getCurrency();
        }, 120000);

        this.$once('beforeDestroy', () => {
            clearInterval(id);
        });
    },
};
</script>
