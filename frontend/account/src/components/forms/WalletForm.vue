<template>
    <div>
        <div class="text-24px xl:text-34px font-medium mb-6">Выберите сумму</div>
        <form action="" class="flex flex-col items-start">
            <label class="mb-4 flex items-center font-bold text-18px">
                <input name="sum" checked type="radio" class="flex-none w-7 h-7 mr-3" />
                <span>100 $</span>
            </label>
            <label class="mb-4 flex items-center font-bold text-18px">
                <input name="sum" type="radio" class="flex-none w-7 h-7 mr-3" />
                <span>200 $</span>
            </label>
            <label class="mb-4 flex items-center font-bold text-18px">
                <input name="sum" type="radio" class="flex-none w-7 h-7 mr-3" />
                <span>300 $</span>
            </label>
            <label class="mb-4 flex items-center font-bold text-18px">
                <input name="sum" type="radio" class="flex-none w-7 h-7 mr-3" />
                <span>400 $</span>
            </label>
            <div class="pt-4">
                <button
                    type="submit"
                    class="outline-none text-18px px-6 py-2 rounded-34px bg-brand text-white hover:bg-brand-10"
                >
                    Отправить
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>
