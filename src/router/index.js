import { createRouter, createWebHistory } from "vue-router";
import Todo from '../screen/Todo.vue';
import LandingPage from '../screen/LandingPage.vue';

const routes = [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/Todo",
      name: "Todo",
      component: Todo,
    },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;
