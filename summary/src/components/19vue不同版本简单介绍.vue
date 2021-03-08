<template>
  <div>
    <p>vue.js完整版，包含运行时和编译版本。</p>
    <p>vue.runtime.js只包含运行时版本。</p>
    // 需要编译器
    <!-- new Vue({
    template: '<div>{{ hi }}</div>'
    })

    // 不需要编译器
    new Vue({
    render (h) {
        return h('div', this.hi)
    }
        }) -->
        <!-- 当使用 vue-loader 或 vueify 的时候，*.vue 文件内部的模板会在构建时预编译成 JavaScript。
        被编译为render函数
        你在最终打好的包里实际上是不需要编译器的，所以只用运行时版本即可。 -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>