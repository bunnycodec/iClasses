import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NewArticle from '../views/NewArticle.vue'
import SignUp from '../views/SignUp.vue'
import NoAccess from '../views/NoAccess.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    userAuth: true
  }
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/signup',
  name: 'SignUp',
  component: SignUp
},
{
  path: '/newArticle',
  name: 'NewArticle',
  component: NewArticle,
  meta: {
    userAuth: true
  }
},
{
  path: '/noAccess',
  name: 'NoAccess',
  component: NoAccess,
  meta: {
    userAuth: true
  }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.userAuth)) {
    const user = firebase.auth().currentUser
    if (user) {
      next()
    } else {
      next({
        name: 'Login'
      })
    }
  } else {
    next()
  }
})

export default router
