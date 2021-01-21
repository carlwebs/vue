<template>
    <div>
        <div>
            <input type="text" name="" v-model="id">
            <input type="text" name="" v-model="name">
            <button @click="add">按钮</button>
        </div>
        <!-- 这里如果不加key选中复选框会有问题 -->
        <div v-for="item in list" :key="item.id">
            <input type="checkbox" name="" id="">
            {{item.id}} --- {{ item.name }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id:"",
                name:"",
                list: [
                    {id:1,name:"jack"},
                    {id:2,name:"box"},
                    {id:3,name:"yellow"},
                    {id:4,name:"red"},
                ]
            }
        },
        methods: {
            add() {
                this.list.unshift({id:this.id,name:this.name});
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>