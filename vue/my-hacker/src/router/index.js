import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/ask",
    name: "ask",
    component: AskView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
  },
  {
    path: "/user/:id",
    name: "user",
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
