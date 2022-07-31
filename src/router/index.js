import { createRouter, createWebHistory } from "vue-router";
import BamsDashboardOverview from "../components/BamsDashboardOverview.vue";
import LoginsignupPage from "../components/LoginsignupPage.vue";
const routes = [
  {
    path: "/",
    name: "LoginsignupPage",
    component: LoginsignupPage,
  },
  {
    path: "/dashboard",
    name: "BamsDashboardOverview",
    component: BamsDashboardOverview,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
