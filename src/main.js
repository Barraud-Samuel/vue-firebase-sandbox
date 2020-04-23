/* eslint-disable no-unused-vars */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import auth from './auth';
import store from './store'

import firebase from './firebase';


Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});
