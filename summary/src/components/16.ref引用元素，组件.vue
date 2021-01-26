<template>
    <div>
        <input type="text" ref="inputEle">
        <div><button @click="getElement">获取元素</button></div>
        <component-a ref="myComponent"></component-a>
        <div><button @click="getComponent">获取组件</button></div>

    </div>
</template>

<script>
    export default {
        methods: {
            getElement() {
                // 元素绑定ref属性，通过$refs可以获取到元素
                this.$refs.inputEle.focus();
            },
            getComponent() {
                console.log(this.$refs.myComponent);
                console.log(this.$refs.myComponent.msg);
            }
        },
        components: {
            "component-a": {
                template: "<div>子组件</div>",
                data() {
                    return {
                        msg: "msg"
                    }
                },
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>