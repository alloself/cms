<template>
    <div>
        <h1 class="text-26px mb-10 xl:mb-15">Рефералы</h1>
        <p class="mb-10">Ваш код: {{ user.referal_code }}</p>
        <div class="table w-full">
            <div class="table-header-group">
                <div class="table-row">
                    <div class="table-cell px-4 py-3 bg-block-20 text-white border-b border-secondary-20 text-left">
                        Email
                    </div>
                </div>
            </div>
            <div class="table-row-group">
                <div class="table-row" v-for="item in referrals" :key="item.id">
                    <div class="table-cell px-4 py-3 border-b border-secondary-20">
                        {{ item.email }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data: () => ({
        form: {},
    }),
    computed: {
        ...mapState('auth', ['user']),
        referrals() {
            return this.user?.children || [];
        },
    },
};
</script>
