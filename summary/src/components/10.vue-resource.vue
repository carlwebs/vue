<template>
    <div>
        <div><button @click="getInfo">get请求</button></div>
        <div><button @click="postInfo">post请求</button></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: ""
            }
        },
        methods: {
            getInfo() {
                this.$http.get("https://www.baidu.com/",(result) => {
                    console.log(result);
                },(error) => {
                    console.log(error);
                }) 
            },
            postInfo() {
                this.$http.post("https://www.baidu.com/",{},{emulateJSON: true},(result) => {
                    console.log(result);
                },(error) => {
                    console.log(error);
                }) 
            }
        },
        mounted() {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>