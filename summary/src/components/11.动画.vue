<template>
    <div>
        <div><button @click="toggle">toggle</button></div>
        <!-- 元素使用动画效果要用transition组件包裹 -->
        <!-- 默认的动画类型是以v-开头，自定义名字添加name属性
        <transition name="fade">  fade-开头
            <div v-if="flag">动画效果</div>
        </transition> -->
        <transition>
            <div v-if="flag">动画效果</div>
        </transition>
        <!-- 使用动画库animate.css  -->
        <transition>
            <div v-if="flag" class="animated fadeIn">我是淡入效果</div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                flag: true
            }
        },
        methods: {
            toggle() {
                this.flag = !this.flag;
            }
        },
    }
</script>

<style lang="scss" scoped>
    // 组件进入之前默认使用的类名
    .v-enter {
        opacity: 0;
    }
    // 动画进入过程中使用的动画
    .v-enter-active {
        transition: all 1s ease;
    }
    // 动画进入完成
    .v-enter-to {

    }
    // 动画开始离开的状态
    .v-leave {

    }
    // 动画离开过程中的动画
    .v-leave-active {
        transition: all 0.4s ease;
    }
    // 动画离开之后的状态
    .v-leave-to {
        opacity: 0;
    }
</style>