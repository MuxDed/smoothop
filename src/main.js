import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase"

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(user => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
});


