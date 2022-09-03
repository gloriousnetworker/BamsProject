import { createRouter, createWebHistory } from "vue-router";
import FeedbackPage from "../views/FeedbackPage.vue";

const routes = [
  {
    path: "/",
    name: "feedback",
    component: FeedbackPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
