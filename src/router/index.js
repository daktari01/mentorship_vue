import Vue from 'vue';
import Router from 'vue-router';

// Import Modules
import Auth from './modules/authentication';

Vue.use(Router);

const routes = [
  ...Auth,
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
