import firebase from 'firebase';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import FireBaseConfig from './config/firebase';

Vue.config.productionTip = false;

firebase.initializeApp(FireBaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
