<template>
    <div class="offcanvas" :class="{ 'is-opened': visible }" @click="clickHandler($event)" data-offcanvas-element>
        <div class="offcanvas__close text-white" @click="toggle()">
            <div class="svg-icon">
                <svg><use xlink:href="#close"></use></svg>
            </div>
        </div>
        <div class="offcanvas__body bg-white">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../events/index';

export default {
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
            if (event.target.hasAttribute('data-offcanvas-element')) {
                this.visible = false;
            }
            this.bodyToggleClass();
        },
    },
    created() {
        eventBus.$on('toggleOffcanvas', (payload) => {
            this.visible = payload;
        });
    },
};
</script>

<style lang="scss">
.offcanvas {
    --offcanvas-width: 280px;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    transition: all 0.3s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    background: rgba(#2b2a33, 0.7);

    &.is-opened {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;

        .offcanvas__body {
            transform: translate3d(0, 0, 0);
        }

        .offcanvas__close {
            transform: translate3d(0, 0, 0);
        }
    }

    &__close {
        position: absolute;
        left: calc(var(--offcanvas-width) + 20px);
        top: 20px;
        transition: all 0.3s;
        transform: translate3d(calc(var(--offcanvas-width) * -1 - 20px), 0, 0);
        cursor: pointer;

        .svg-icon {
            width: 24px;
            height: 24px;
        }
    }

    &__body {
        width: var(--offcanvas-width);
        height: 100%;
        transition: all 0.3s;
        transform: translate3d(-120%, 0, 0);
        overflow-y: auto;
        padding: 20px;
    }
}
</style>
