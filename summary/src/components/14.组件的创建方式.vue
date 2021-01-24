<template>
    <div>
        <component-a></component-a>
        <component-b></component-b>
        <component-c></component-c>
        <transition mode="out-in">
            <component :is="com"></component>
        </transition>
        <button @click="comChange">切换组件</button>
    </div>
</template>
<script>
    import Vue from 'vue';
    // 创建组件方式一
    var coma = Vue.extend({
        template: "<div>组件1</div>"
    })
    Vue.component("component-a",coma);

    // 创建组件方式二
    Vue.component("component-b",{
        template: "<div>组件2</div>"
    })
    export default {
        data() {
            return {
                com: "component-a"
            }
        },
        components: {
            componentC: {
                template: "<div>局部组件{{msg}}</div>",
                // 组件data要返回一个对象，否则多个组件的状态就一样了，指向一个对象
                data() {
                    return {
                        msg: "123"
                    }
                },
            }
        },
        methods: {
            comChange() {
                this.com = "component-b";
            }
        },
    }
</script>

<style lang="scss" scoped>
    .v-enter,
    .v-leave-to {
        opacity: 0;
        transform: translateY(200px);
    }
    .v-enter-active,
    .v-leave-active {
        transition: all 1s ease;
    }
</style>