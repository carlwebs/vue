<template>
    <div>
        <div id="box">{{msg}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "msg"
            }
        },
        methods: {
            add() {
                
            }
        },
        beforeCreate() {   //表示实例完全被创建出来之前，会执行它
            console.log(this.msg);  //获取不到数据
        },
        created() {     //实例被创建完成
            console.log(this.msg); //msg   
        },
        beforeMount() {  //模板已经在内存中编辑完成了，但是尚未把模板渲染到页面中
            console.log(document.getElementById("box"));  //null   获取不到DOM节点
        },
        mounted() {  //内存中的模板，已经挂载到真实的页面中，用户可以看到页面了。
            console.log(document.getElementById("box"));
            setTimeout(() => {
                this.msg = "修改";
            }, 3000);
        },
        beforeUpdate() {   //界面没有更新，数据已经更新了(数据变化的时候调用)
            console.log(this.msg);  //修改
        },
        updated() {
            console.log(this.msg);  //修改
        },
        beforeDestroy() {

        },
        destroyed() {

        }
    }
</script>

<style lang="scss" scoped>

</style>