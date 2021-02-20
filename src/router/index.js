import Vue from 'vue'
import VueRouter from 'vue-router'

const App=()=>import('./../App.vue')
const Home=()=>import('./../views/Home.vue')
const Item=()=>import('./../views/Item.vue')
const Result=()=>import('./../views/Result.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    children:[
      {
        path:"",
        redirect:"home"
      },
      {
        path:"home",
        component:Home
      },
      {
        path:"item",
        component:Item
      },
      {
        path:"result",
        component:Result
      }
    ]
  },
  
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
