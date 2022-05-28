<template>
    <div
        class="site-modal"
        :class="[{ 'is-opened': visible }, addClass]"
        @click="clickHandler($event)"
        data-modal-element
    >
        <div class="site-modal__body shadow-md">
            <div class="site-modal__close" @click="toggle()">
                <div class="svg-icon">
                    <svg><use xlink:href="#close"></use></svg>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../events/index';

export default {
    props: {
        modalName: {
            type: String,
            required: true,
        },
        addClass: {
            type: String,
        },
    },
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        bodyToggleClass() {
            if (this.visible) {
                document.body.classList.add('overflow-hidden');
            } else {
                document.body.classList.remove('overflow-hidden');
            }
        },
        toggle() {
            this.visible = !this.visible;
            this.bodyToggleClass();
        },
        clickHandler(event) {
            if (event.target.hasAttribute('data-modal-element')) {
                this.visible = false;
            }
            this.bodyToggleClass();
        },
    },
    created() {
        eventBus.$on('showModal', (payload) => {
            if (this.modalName === payload) {
                this.visible = true;
                this.bodyToggleClass();
            }
        });
        eventBus.$on('closeModal', (payload) => {
            if (this.modalName === payload) {
                this.visible = false;
                this.bodyToggleClass();
            }
        });
    },
};
</script>

<style lang="scss">
.site-modal {
    --modal-width: 520px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 120;
    background: rgba(#2b2a33, 0.7);
    padding: 20px;
    overflow-y: auto;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;

    &__body {
        margin: auto;
        width: var(--modal-width);
        max-width: 100%;
        background: #fff;
        border-radius: 12px;
        color: #000;
        padding: 24px;
        transform: translateY(-120px);
        transition: all 0.3s;
        position: relative;
    }

    &__close {
        position: absolute;
        cursor: pointer;
        right: 16px;
        top: 16px;

        .svg-icon {
            color: #2b2a33;
            width: 20px;
            height: 20px;
        }
    }

    &.is-opened {
        opacity: 1;
        visibility: visible;

        .site-modal__body {
            transform: translateY(0);
        }
    }
}
</style>
