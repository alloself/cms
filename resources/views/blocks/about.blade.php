<section class="site-about-block py-8 lg:py-14">
    <div class="container mx-auto px-4">
        <h2 class="mb-8 font-medium text-34px lg:text-46px leading-tight">{{$block->title}}</h2>
        <app-tabs>
            @foreach ($block->blocks as $item)
            <x-block :block="$item"></x-block>
            @endforeach
        </app-tabs>
    </div>
</section>
