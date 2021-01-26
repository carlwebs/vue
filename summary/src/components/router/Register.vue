<template>
    <div>
        我是注册组件
    </div>
</template>

<script>
    export default {
        created() {
            // 路由传递参数方式二
            // 配置路由：
            // {
            //     path: '/register/:name/:age',
            //     name: 'Register',
            //     component: Register
            // }
            // 使用:
            // <router-link to="/register/good/12">注册</router-link>
            console.log(this.$route.params);
            console.log(this.$route.params.name); //good
            console.log(this.$route.params.age); //12
        }
    }
</script>

<style lang="scss" scoped>

</style>