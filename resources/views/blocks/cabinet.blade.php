<section class="site-present-block py-8 lg:py-14 dark:bg-main-10">
    <div class="container mx-auto px-4">
        <div class="md:flex md:justify-between mb-8 text-34px lg:text-46px leading-tight">
            <h2 class="font-medium">Личный кабинет</h2>
            <a href="#" class="mt-4 md:mt-0 block text-brand hover:text-brand-10" @click.prevent="showModal('login-modal')">Войти в аккаунт</a>
        </div>
        <div class="site-present-block__body text-white relative z-10 overflow-hidden rounded-xl p-7 bg-gradient-to-r from-block to-block-10 lg:flex lg:items-center lg:p-12 xl:items-stretch dark:from-main dark:to-main-20">
            <div class="flex flex-col justify-between lg:w-3/5 xl:w-2/5">
                <div>
                    <h2 class="font-bold text-34px lg:text-56px">Union Capital</h2>
                    <p class="font-light text-16px lg:text-34px">Пройти быструю<br> регистрацию</p>
                </div>
                <div class="mt-6 xl:mt-0">
                    <p class="text-22px leading-relaxed mb-5 lg:mb-14">С нами вы можете инвестировать и<br> быть спокойными за свои активы</p>
                    <button class="transition rounded-34px px-6 py-4 bg-brand text-18px lg:px-10 lg:text-26px font-medium tracking-wider hover:bg-brand-10">Начать инвестировать</button>
                </div>
            </div>
            <div class="pt-5 absolute z-1-neg right-0 top-1/2 transform -translate-y-1/2 opacity-10 lg:opacity-100 lg:static lg:translate-y-0 lg:w-2/5 xl:w-3/5 lg:pl-5 lg:pt-0">
                <img class="drop-shadow-2xl" src="/public/files/block-pic-1.png" alt="">
            </div>
        </div>
    </div>
</section>
