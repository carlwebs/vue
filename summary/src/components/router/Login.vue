<template>
    <div>
        我是login组件
    </div>
</template>

<script>
    export default {
        created() {
            // <router-link to="/login?name=jack&age=10">登录</router-link>
            // 可以获取到这种路由传参的值
            console.log(this.$route);
            console.log(this.$route.query.name);  //jack
        }  
    }
</script>

<style lang="scss" scoped>

</style>