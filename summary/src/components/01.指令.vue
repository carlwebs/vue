<template>
  <div>
    <!-- 使用v-cloak能够解决插值表达式闪烁的问题 -->
    <!-- 原理：在数据没有解析出来之前，页面会显示{{name}}，在元素上添加v-cloak,
    css中配置[v-cloak] {display:none}
    表达式解析完以后v-cloak属性消失，元素显示出来-->
    <p v-cloak>{{name}}</p>
    <!-- v-text相当于innerText -->
    <p v-text="vText"></p>
    <!-- v-html可以是js的表达式 -->
    <p v-html="vHtml + 'html'"></p>
    <!-- v-bind绑定属性 -->
    <p v-bind:title="vBindTitle">vBindTitle</p>
    <!-- v-bind简写形式 -->
    <p :title="vBindTitle">vBindTitle</p>
    <!-- v-on绑定事件 -->
    <div>
      <button v-on:click="vClick">vClick</button>
    </div>
    <div>
      <button @click="vClick2($event,'msg')">vClick2</button>
    </div>
    <div v-if="vIf">vIf</div>
    <div v-show="vShow">vShow</div>
    <!-- 修饰符 -->
    <div @click="divClick" class="inner">
      <button @click.stop="btnClick">按钮</button>
    </div>
    <div>
      <a href="https://www.baidu.com/" @click.prevent="linkClick">百度一下你就知道</a>
    </div>
    <!-- capture事件捕获 -->
    <div @click.capture="divClick" class="inner">
      <button @click="btnClick">按钮</button>
    </div>
    <div @click.self="divClick" class="inner">
      <button @click="btnClick">按钮</button>
    </div>
    <div @click.once="divOnce">once</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "jack",
      vText: "v-text",
      vHtml: "<h1>vHtml</h1>",
      vBindTitle: "title",
      vIf: true,
      vShow: true
    };
  },
  methods: {
    vClick() {
      console.log("click");
    },
    vClick2(e, msg) {
      console.log(e, msg, this);
    },
    divClick() {
      console.log("divClick");
    },
    btnClick() {
      console.log("btnClick");
    },
    linkClick() {
      console.log("linkClick");
    },
    divOnce() {
      console.log("divOnce");
    }
  }
};
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
.inner {
  width: 100%;
  height: 300px;
  background-color: red;
  color: white;
}
</style>