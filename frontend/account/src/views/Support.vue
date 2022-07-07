<template>
    <div>
        <h1 class="text-26px mb-10 xl:mb-15">Поддержка</h1>
        <form class="mb-10">
            <div class="mb-6">
                <input
                    class="outline-none w-full text-black py-3 px-5 border border-2 border-secondary-10 dark:border-secondary rounded-xl bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white"
                    type="text"
                    v-model="form.theme"
                    placeholder="Тема"
                />
            </div>
            <div class="mb-6">
                <textarea
                    class="outline-none w-full text-black py-3 px-5 border border-2 border-secondary-10 dark:border-secondary rounded-xl bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white resize-y"
                    rows="10"
                    v-model="form.content"
                    placeholder="Текст"
                ></textarea>
            </div>
            <div class="flex">
                <button
                    class="outline-none px-6 py-2 rounded-34px bg-brand hover:bg-brand-10 text-white text-18px"
                    @click.prevent="createTicket(form), (form = {}), getTickets()"
                >
                    Отправить
                </button>
            </div>
        </form>
        <div class="table w-full">
            <div class="table-header-group">
                <div class="table-row">
                    <div class="table-cell px-4 py-3 bg-block-20 text-white border-b border-secondary-20 text-left">
                        Дата
                    </div>
                    <div class="table-cell px-4 py-3 bg-block-20 text-white border-b border-secondary-20 text-left">
                        Тема
                    </div>
                    <div class="table-cell px-4 py-3 bg-block-20 text-white border-b border-secondary-20 text-left">
                        Статус
                    </div>
                </div>
            </div>
            <div class="table-row-group">
                <div
                    class="table-row cursor-pointer"
                    v-for="item in tickets"
                    :key="item.id"
                    @click="$router.push({ name: 'Ticket', params: { id: item.id } })"
                >
                    <div class="table-cell px-4 py-3 border-b border-secondary-20">
                        {{ new Date(item.created_at).toLocaleDateString() }}
                    </div>
                    <div class="table-cell px-4 py-3 border-b border-secondary-20">
                        {{ item.theme }}
                    </div>
                    <div class="table-cell px-4 py-3 border-b border-secondary-20">
                        {{ item.status }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    data: () => ({
        form: {},
    }),
    methods: {
        ...mapActions('ticket', ['createTicket', 'getTickets']),
    },
    computed: {
        ...mapState('ticket', ['tickets']),
    },
    created() {
        this.getTickets();
    },
};
</script>
