import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login  from '@/components/router/Login';
import Register  from '@/components/router/Register';
import Parent  from '@/components/router/Parent';
import ChildOne  from '@/components/router/ChildOne';
import ChildTwo  from '@/components/router/ChildTwo';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/helloWorld"
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register/:name/:age',
      name: 'Register',
      component: Register
    },{
      path: '/parent',
      name: 'Parent',
      component: Parent,
      children: [
        {path: "childOne",component: ChildOne},
        {path: "childTwo",component: ChildTwo}
      ]
    }
  ]
})
