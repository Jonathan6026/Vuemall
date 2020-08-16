import Vue from 'vue'
import VueRouter from 'vue-router'

//6.创建home懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

//1.安装插件

Vue.use(VueRouter)

//2.创建router

//4.传入属性
const routes = [
  //5.配置对应映射关系
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]
const router = new VueRouter({
  //4.传入属性
  routes,
  mode:'history'
})

//3.导出router

export default router
