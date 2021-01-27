<template>
    <div>
        firstName: <input type="text" v-model="firstName">
        lastName: <input type="text" v-model="lastName">
        fullName: <input type="text" v-model="fullName">
        <br>
        {{fullName}}
    </div>
</template>

<script>
    export default {
       data() {
           return {
               firstName: "",
               lastName: ""
           }
       },
       computed: {
        //    计算属性有缓存效果，依赖的属性值不变，计算属性不会改变。
           fullName() {
               console.log(1)
               return this.firstName + this.lastName; 
           }
       },
    }
</script>

<style lang="scss" scoped>

</style>