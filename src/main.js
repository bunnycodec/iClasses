import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import CKEditor from 'ckeditor4-vue'
import firebase from 'firebase'

Vue.use(CKEditor)
Vue.config.productionTip = false

const app = null

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
