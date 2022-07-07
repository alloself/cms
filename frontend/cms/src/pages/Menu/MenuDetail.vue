<template>
    <detail namespace="menu">
        <template #form="{ setValue, entity, createView }">
            <v-text-field
                label="Название"
                outlined
                :value="entity.name"
                @input="(val) => setValue('name', val)"
            ></v-text-field>
            <picker
                label="Язык"
                model="language"
                textSelector="name"
                :value="entity.language_id"
                @input="(val) => setValue('language_id', val)"
            ></picker>
            <edit-list-menu
                title="Пункты меню"
                relationPicker
                v-if="!createView"
                :value="entity.items"
                @input="(val) => setValue('items', val)"
            ></edit-list-menu>
        </template>
    </detail>
</template>
<script>
export default {
    metaInfo: {
        title: 'Меню',
    },
};
</script>
