<template>
  <div id="app">
    a标签的方式跳转：<a href="#/login">登录</a>
    <br>
    <router-link to="/login?name=jack&age=10">登录</router-link>
    <router-link to="/register/good/12">注册</router-link>
    <router-link to="/parent">嵌套路由</router-link>
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .router-link-active {
    color: blue;
    font-weight: 700;
    font-size: 50px;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(200px);
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 1s ease;
  }
</style>
