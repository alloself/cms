<template>
    <div class="content-editor">
        <!-- Use the component in the right place of the template -->
        <tiptap-vuetify
            :placeholder="placeholder"
            :value="value"
            @input="onInput"
            :extensions="extensions"
            :toolbar-attributes="{ dark: true, outlined: true, rounded: true, color: '#1e1e1e' }"
            :card-props="{ dark: true, outlined: true, flat: true, rounded: true }"
        />
    </div>
</template>

<script>
import {
    TiptapVuetify,
    Heading,
    Bold,
    Italic,
    Strike,
    Underline,
    Code,
    Paragraph,
    BulletList,
    OrderedList,
    ListItem,
    Link,
    Blockquote,
    HardBreak,
    HorizontalRule,
    History,
} from 'tiptap-vuetify';

export default {
    components: { TiptapVuetify },
    props: {
        value: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: 'Контент',
        },
    },
    data: () => ({
        extensions: [
            History,
            Blockquote,
            Link,
            Underline,
            Strike,
            Italic,
            ListItem,
            BulletList,
            OrderedList,
            [
                Heading,
                {
                    options: {
                        levels: [1, 2, 3],
                    },
                },
            ],
            Bold,
            Code,
            HorizontalRule,
            Paragraph,
            HardBreak,
        ],
    }),
    methods: {
        onInput(value) {
            this.$emit('input', value);
        },
    },
};
</script>
<style lang="scss" scoped>
.content-editor {
    margin-bottom: 16px;
}
</style>
