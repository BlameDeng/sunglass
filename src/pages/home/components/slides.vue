<template>
    <div class="g-slides" @mouseenter="enter" @mouseleave="leave">
        <div class="g-view" ref="view" :class="{transition}">
            <slot></slot>
        </div>
        <x-icon name="prev" class="icon prev" @click="changeCurrent(-1)"></x-icon>
        <x-icon name="next" class="icon next" @click="changeCurrent(1)"></x-icon>
    </div>
</template>
<script>
    import xIcon from '../../components/icon/icon.vue'
    export default {
        name: 'Slides',
        components: { xIcon },
        props: {
            duration: { type: Number, default: 3000 },
            autoPlay: { type: Boolean, default: true }
        },
        data() {
            return {
                current: 1,
                transition: true,
                length: 0,
                timerId: null
            }
        },
        computed: {},
        watch: {
            current(newVal, oldVal) {
                if (!this.transition) {
                    this.transition = true
                }
                let view = this.$refs.view
                //最后一张到第一张
                if (newVal === 1 && oldVal === this.length) {
                    view.style.transform = `translateX(${-100 * (this.length + 1)}%)`
                    view.addEventListener('transitionend', this.reset)
                    return
                }
                //第一张到最后一张
                if (newVal === this.length && oldVal === 1) {
                    view.style.transform = `translate(0)`
                    view.addEventListener('transitionend', this.reset)
                    return
                }
                view.style.transform = `translateX(${-100 * newVal}%)`
            }
        },
        created() {},
        mounted() {
            this.$nextTick(() => {
                this.cloneDom()
                this.autoPlay && this.startAutoPlay()
            })
        },
        beforedestroy() {
            this.$refs.view.removeEventListener('transitionend', this.reset)
        },
        methods: {
            cloneDom() {
                const nodes = this.$slots.default
                this.length = (nodes.length + 1) / 2
                const first = nodes[0].elm.cloneNode(true)
                const last = nodes[nodes.length - 1].elm.cloneNode(true)
                this.$refs.view.prepend(last)
                this.$refs.view.appendChild(first)
            },
            reset() {
                let view = this.$refs.view
                this.transition = false
                if (this.current === 1) {
                    view.style.transform = `translateX(-100%)`
                } else {
                    view.style.transform = `translateX(${-100 * this.length}%)`
                }
                view.removeEventListener('transitionend', this.reset)
            },
            startAutoPlay() {
                let play = () => {
                    this.changeCurrent(1)
                    this.timerId = setTimeout(play, this.duration)
                }
                this.timerId = setTimeout(play, this.duration)
            },
            changeCurrent(n) {
                this.current += n
                if (this.current > this.length) {
                    this.current = 1
                } else if (this.current < 1) {
                    this.current = this.length
                }
            },
            stopPlay() {
                window.clearTimeout(this.timerId)
                this.timerId = null
            },
            enter() {
                this.timerId && this.stopPlay()
            },
            leave() {
                this.autoPlay && !this.timerId && this.startAutoPlay()
            }
        }
    }
</script>
<style scoped lang="scss">
    .g-slides {
        width: 100%;
        overflow: hidden;
        position: relative;
        >.icon {
            width: 30px;
            height: 30px;
            color: #fff;
            position: absolute;
            z-index: 10;
            cursor: pointer;
            opacity: 0;
            &.prev {
                left: 0;
                top: 40%;
                transform: translateY(-50%);
            }
            &.next {
                right: 0;
                top: 40%;
                transform: translateY(-50%);
            }
        }
        &:hover {
            >.icon {
                opacity: .85;
            }
        }
        >.g-view {
            display: flex;
            width: 100%;
            transform: translateX(-100%);
            &.transition {
                transition: transform 500ms linear;
            }
        }
    }
</style>