<template>
    <div>
        <div v-for="(name,index) in names" :key="name">
            {{index}} --- {{ name }} 
        </div>
        <div v-for="(value,key,index) in objs" :key="key">
            {{ value }} --- {{key}} --- {{index}}
        </div>
        <div v-for="num in nums" :key="num">
            {{ num }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                names: ["jack",'box'],
                objs: {
                    name:"jack",
                    age: 12
                },
                nums: 10
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>