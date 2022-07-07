<template>
    <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col">
        <div
            class="site-news__item mb-4 text-white flex flex-col justify-between relative z-10 overflow-hidden rounded-xl p-7 bg-gradient-to-r from-block to-block-10 dark:from-main dark:to-main-20 lg:p-14"
        >
            <div class="text-34px lg:text-56px leading-tight">{{ ticket.theme }} - {{ ticket.status }}</div>
            <div>{{ ticket.content }}</div>
        </div>
        <div
            v-if="ticket.messages && user"
            id="messages"
            class="flex flex-col space-y-4 py-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
            <div v-for="message in ticket.messages" class="chat-message" :key="message.id">
                <div class="flex items-end" :class="{ 'justify-end': message.creator_id === user.id }">
                    <div class="flex flex-col space-y-2 text-xs max-w-xs order-2 items-start">
                        <div>
                            <div
                                :class="{
                                    'bg-brand text-white': message.creator_id === user.id,
                                    'bg-gray-300 text-gray-600': message.creator_id !== user.id,
                                }"
                                class="px-4 py-2 rounded-lg inline-block rounded-bl-none"
                            >
                                {{ message.content }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-4 mb-2 sm:mb-0">
            <div class="relative flex">
                <input
                    type="text"
                    v-model="newMessage"
                    placeholder="Write your message!"
                    class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-3 bg-gray-200 rounded-lg py-3"
                />
                <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
                    <button
                        type="button"
                        class="inline-flex items-center justify-center rounded-r-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-brand focus:outline-none"
                    >
                        <span class="font-bold" @click="sendMessage(newMessage), (newMessage = '')">Отправить</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    data: () => ({
        ticket: {},
        newMessage: '',
    }),
    methods: {
        ...mapActions('ticket', ['getTicket']),
        async sendMessage(content) {
            const { data } = await this.client.post('message', {
                ticket_id: this.ticket.id,
                content,
                creator_id: this.user.id,
            });
            this.ticket.messages.push(data);
        },
    },
    computed: {
        ...mapState('ticket', ['tickets']),
        ...mapState({
            client: (state) => state.client,
            user: (state) => state.auth.user,
        }),
    },
    async created() {
        this.ticket = await this.getTicket(this.$route.params.id);
    },
};
</script>

<style scoped>
.scrollbar-w-2::-webkit-scrollbar {
    width: 0.25rem;
    height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
    --bg-opacity: 1;
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
    --bg-opacity: 1;
    background-color: #edf2f7;
    background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
}
</style>
