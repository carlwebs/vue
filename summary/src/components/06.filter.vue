<template>
  <div>
      <div>{{msg | filterDemo("x","y")}}</div>
      <div>{{msg | filterDemo2("x","y")}}</div>
      <!-- globalFilter.js中定义的全局过滤器 -->
      <div>{{msg | format}}</div>
  </div>
</template>

<script>
    import Vue from "vue";
    // 参数一表达式的值，后面是过滤器的参数
    // 全局过滤器也可以写在main.js中
    Vue.filter("filterDemo",function(value,arg1,arg2) {
        return value + arg1 + arg2;
    })
    export default {
        data() {
            return {
                msg: "abc"
            };
        },
        // 局部过滤器
        filters: {
            "filterDemo2": function(value,arg1,arg2) {
                return value + arg1 + arg2
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>