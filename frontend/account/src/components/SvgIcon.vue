<template>
    <div class="svg-icon" :class="iconClass">
        <svg><use :xlink:href="'#' + iconName"></use></svg>
    </div>
</template>

<script>
export default {
    props: {
        iconClass: String,
        iconName: String,
    },
};
</script>
