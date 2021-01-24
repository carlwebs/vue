<template>
    <div>
        <component-a @fn="show"></component-a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            show(data) {
                console.log("我是父组件中的方法：" + data);
            }
        },
        components: {
            "component-a": {
                props: ['msg'],
                data() {
                    return {
                        child: "我是子组件中的数据"
                    }
                },
                template: "<div @click='parentFn'>父子组件通信{{msg}}</div>",
                methods: {
                    parentFn() {
                        this.$emit("fn",this.child)
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>