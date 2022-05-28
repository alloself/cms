<template>
    <form action="" class="md:w-1/2">
        <div class="mb-6">
            <input
                class="outline-none w-full text-black py-3 px-5 border border-2 border-secondary-10 dark:border-secondary rounded-xl bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white"
                type="text"
                placeholder="Тема"
            />
        </div>
        <div class="mb-6">
            <textarea
                class="outline-none w-full text-black py-3 px-5 border border-2 border-secondary-10 dark:border-secondary rounded-xl bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white resize-y"
                rows="10"
                placeholder="Текст"
            ></textarea>
        </div>
        <div class="flex">
            <button class="outline-none px-6 py-2 rounded-34px bg-brand hover:bg-brand-10 text-white text-18px">
                Отправить
            </button>
        </div>
    </form>
</template>
