import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
  linkExactActiveClass: 'nav-item active',
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
});
export default router;
