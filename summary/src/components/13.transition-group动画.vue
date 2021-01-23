<template>
    <div>
        <!-- <ul> -->
            <!-- 为一组元素添加动画 -->
            <!-- 设置appear可以实现元素刚进场的动画 -->
            <!-- tag设置transition-group展示为什么元素，默认是span -->
            <transition-group appear tag="ul">
                <li v-for="item in list" :key="item.name">
                    {{item.name}} --- {{item.age}}
                </li>
            </transition-group>
        <!-- </ul> -->
        <button @click="deletes">delete</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {name:"jack",age:"12"},
                    {name:"box",age:"20"},
                ]
            }
        },
        mounted() {
            setTimeout(() => {
                this.list.push({name:"add",age:"23"});
            }, 3000);
        },
        methods: {
            deletes() {
                this.list.splice(1,1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-enter,
    .v-leave-to {
        transform: translateY(100px);
    }
    .v-enter-active,
    .v-leave-active {
        transition: all 1s ease;
    }

    // 这两个类可以实现后面元素往上滚动时候的动画效果
    .v-move {
        transition: all 1s ease;
    }
    .v-leave-active {
        position: absolute;
    }
</style>