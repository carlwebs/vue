<template>
    <div>
        <input v-model="msg" type="text" @keyup.enter="keyCodeDemo" />
        <input v-model="msg" type="text" @keyup.13="keyCodeDemo" />
        <input v-model="msg" type="text" @keyup.f2="keyCodeDemo" />
    </div>
</template>

<script>
    import Vue from 'vue';
    // 定义keycode的别名
    Vue.config.keyCodes.f2 = 113;
    export default {
        data() {
            return {
                msg: ""
            }
        },
        methods: {
            keyCodeDemo() {
                console.log("keyCode");
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>