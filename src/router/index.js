import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Overview from "../views/Overview.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", component: Overview },
      { path: "profile", component: Profile }
    ]
  }
  //   { path: "/", component: Overview },
  //   { path: "/profiles", component: Profiles },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
