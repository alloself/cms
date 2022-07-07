<template>
    <detail namespace="block">
        <template #form="{ setValue, entity, createView }">
            <v-text-field
                label="Название"
                outlined
                :value="entity.name"
                @input="(val) => setValue('name', val)"
            ></v-text-field>
            <v-text-field
                label="Заголовок"
                outlined
                :value="entity.title"
                @input="(val) => setValue('title', val)"
            ></v-text-field>
            <v-text-field
                label="Подзаголовок"
                outlined
                :value="entity.subtitle"
                @input="(val) => setValue('subtitle', val)"
            ></v-text-field>
            <with-relation-picker
                title="Изображения"
                model="file"
                :query="{
                    type: 'image',
                }"
                :value="entity.images"
                @input="(val) => setValue('images', val)"
                valueKey="file"
            ></with-relation-picker>
            <with-relation-picker
                title="Файлы"
                model="file"
                :query="{
                    type: 'file',
                }"
                :value="entity.files"
                @input="(val) => setValue('files', val)"
                valueKey="file"
            ></with-relation-picker>
            <attributes-picker
                :value="entity.attributes"
                @input="(val) => setValue('attributes', val)"
            ></attributes-picker>
            <v-text-field
                label="Ссылка"
                outlined
                :value="entity.link"
                @input="(val) => setValue('link', val)"
            ></v-text-field>
            <content-editor :value="entity.content" @input="(val) => setValue('content', val)"></content-editor>
            <edit-list
                title="Дочерние блоки"
                relationPicker
                v-if="!createView"
                :value="entity.blocks"
                @input="(val) => setValue('blocks', val)"
            ></edit-list>
        </template>
    </detail>
</template>
