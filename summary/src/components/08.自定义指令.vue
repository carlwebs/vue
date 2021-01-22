<template>
    <div>
        <input v-model="msg" type="text" v-focus="msg"/>
        <div v-focus2>局部指令</div>
        <div v-focus3>指令的简写形式</div>
    </div>
</template>

<script>
    import Vue from 'vue';
    Vue.directive("focus",{
        bind: function(el) {  //每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次
            console.log(el); 
        },
        inserted: function(el,binding) {  //表示元素插入到DOM中的时候会执行inserted函数，只执行一次
            el.focus();
            console.log(binding);  //指令传递的参数，形式如下：
            // binding：一个对象，包含以下 property：
            // name：指令名，不包括 v- 前缀。
            // value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
            // oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
            // expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
            // arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
            // modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
        },
        update: function(el,binding) {  //当VNode更新的时候，会执行updated，可能触发多次,传递的参数变化的时候会调用
            console.log(binding); 
        }
    })
    export default {
        data() {
            return {
                msg:"msg1"
            }
        },
        directives: {
            focus2: {
                bind() {
                    console.log("局部指令");
                }
            },
            focus3: function() {
                console.log("指令的简写形式，会把这个函数添加到bind和inserted中");
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>