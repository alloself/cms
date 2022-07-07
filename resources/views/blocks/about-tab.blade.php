<app-tab name="{{$block->title}}">
    <div class="lg:flex md:items-center">
        <div class="lg:w-3/5 lg:pr-5">
            <h3 class="text-34px leading-tight mb-6">{{$block->title}}</h3>
            <div class="text-secondary-30 dark:text-secondary text-16px font-light">
                {!!$block->content!!}
            </div>
        </div>
        <div
            class="text-center flex-none absolute z-1-neg right-0 top-1/2 opacity-10 lg:w-2/5 lg:static lg:opacity-100">
            <img class="inline-block drop-shadow-2xl" width="360" src="/public/files/block-pic-3.png" alt="">
        </div>
    </div>
</app-tab>
