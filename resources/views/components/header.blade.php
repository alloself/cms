<header class="site-header py-4 shadow-md sticky top-0 z-40 bg-white dark:bg-main-10">
    <div class="relative container mx-auto px-4">
        <div class="flex items-center justify-between">
            <div @click="showOffcanvas()" class="cursor-pointer svg-icon w-8 h-8 xl:hidden">
                <svg>
                    <use xlink:href="#menu"></use>
                </svg>
            </div>
            <div class="flex items-center">
                <a href="/" class="flex-none block site-logo italic text-brand text-26px md:text-34px leading-34px">
                    <strong class="font-black">Union</strong>
                    <span>Capital</span>
                </a>
                <nav class="site-top-nav flex-none hidden xl:block ml-8">
                    <ul class="flex text-16px dark:text-white">
                        @foreach ($items as $item)
                        <li class="mr-8"><a href="{{$item->link}}" class="hover:text-brand">{{$item->title}}</a></li>
                        @endforeach
                    </ul>
                </nav>
            </div>
            <div class="flex items-center space-x-2">
                <a href="/account/login"
                    class="hidden xl:flex items-center px-4 self-stretch rounded-34px border-2 border-secondary-10">Войти</a>
                <a href="/account/registration"
                    class="hidden xl:flex items-center px-4 self-stretch rounded-34px bg-brand text-white">Регистрация</a>
                <div @click="mobileSearchVisible = !mobileSearchVisible" class="round-icon flex-none xl:hidden"
                    data-site-search-mobile-trigger :class="{'is-active': mobileSearchVisible}">
                    <x-svg-icon name="search-brand"></x-svg-icon>
                </div>
                <button type="button" class="theme-switcher flex-none" @click="toggleTheme()">
                    <x-svg-icon name="theme-dark" iconClass="svg-icon--theme-dark"></x-svg-icon>
                    <x-svg-icon name="theme-light" iconClass="svg-icon--theme-light"></x-svg-icon>
                </button>

                @if(app()->getLocale() === 'ru')
                <a href="{{ route(Route::currentRouteName(),'en') }}" type="button"
                    class="language-switcher capitalize flex items-center justify-center">
                    {{app()->getLocale()}}</a>
                @else
                <a href="{{ route(Route::currentRouteName(),'ru') }}" type="button"
                    class="language-switcher capitalize flex items-center justify-center">
                    {{app()->getLocale()}}</a>
                @endif

            </div>
        </div>
    </div>
</header>

<app-offcanvas v-cloak>
    <div class="flex mb-4">
        <button @click="showModal('login-modal')"
            class="xl:block px-4 py-2 flex-1 rounded-34px border-2 border-secondary-10 text-black">Войти</button>
        <button @click="showModal('login-modal')"
            class="xl:block px-4 py-2 flex-1 rounded-34px bg-brand text-white ml-2">Регистрация</button>
    </div>
    <div class="border-b-2 border-secondary mt-3 mb-2"></div>
    <ul class="mb-3 flex flex-col">
        @foreach ($items as $item)
        <li><a href="{{$item->link}}"
                class="block font-bold py-2 hover:underline text-main hover:text-brand">{{$item->title}}</a></li>
        @endforeach

    </ul>
</app-offcanvas>
