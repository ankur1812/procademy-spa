import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Overview from "../views/Overview.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    name: "My training profiles", // Homepage is currently the overview page
    children: [
      { path: "/", component: Overview, name: "My training profiles" },
      { path: "profile", component: Profile, name: "" }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
