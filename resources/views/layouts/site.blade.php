<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> {{$page->title ? $page->title.' | Санаторий Солнечный' : 'Санаторий Солнечный'}} </title>
        <link href="{{ mix('/css/index.css') }}" rel="stylesheet">
    </head>
    <body>
        <script>
            function themeOnLoad() {
                const theme = localStorage.getItem('union-app-theme');
                theme && document.body.classList.add(theme);
            }
            themeOnLoad();
        </script>
        <x-svg-sprite></x-svg-sprite>
        <main id="main" class="tracking-wider">
            <x-header :page-attributes="$page->attributes"></x-header>
            @yield('content')
            <x-footer :page-attributes="$page->attributes"></x-footer>
            <x-offcanvas></x-offcanvas>
            <x-modals></x-modals>
        </main>
        @foreach (getAttributesByName($page->attributes,'scripts') as $item)
        <script src="{{$item->pivot->value}}" async></script>
        @endforeach
        <script src="{{ mix('/js/manifest.js') }}" defer></script>
        <script src="{{ mix('/js/vendor.js') }}" defer></script>
        <script src="{{ mix('/js/index.js') }}" defer></script>
        <script src="https://api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU" type="text/javascript"></script>
    </body>
</html>
