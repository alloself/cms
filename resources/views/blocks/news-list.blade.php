<section class="site-news py-8 lg:py-14">
    <div class="container mx-auto px-4">
        <div class="md:flex md:justify-between mb-8 text-34px lg:text-46px leading-tight">
            <h2 class="font-medium">{{$block->title}}</h2>

        </div>
        <div class="grid gap-5 grid-cols-1 lg:grid-cols-2">
            @foreach ($block->blocks as $item)
            <x-block :block="$item"></x-block>
            @endforeach
        </div>
    </div>
</section>
