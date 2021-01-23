<template>
    <div>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <div class="ball" v-if="flag"></div>
        </transition>
        <input type="button" value="动画" @click="flag = !flag">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                flag: false
            }
        },
        methods: {
            beforeEnter(el) {
                el.style.transform = "translate(0,0)";
            },
            enter(el,done) {
                // 没有这句话动画出不来，加上强制刷新
                el.offsetWidth;
                el.style.transform = "translate(150px,450px)";
                el.style.transition = "all 1s ease";
                // done函数，通知动画已经完成，否则afterEnter会延迟一点执行
                // done本质就是afterEnter函数的引用。
                done();
            },
            afterEnter(el) {
                this.flag = !this.flag;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .ball {
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
    }
</style>