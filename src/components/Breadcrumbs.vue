<template>
  <nav>
    <ul id="breadcrumbs" class="flex p-0 m-0">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <component
          :is="currentRoute != crumb.path ? 'router-link' : 'span'"
          class="no-underline text-slate-500"
          :to="crumb.path"
        >
          <span v-if="crumb.label == 'home'" class="icons8-home"></span>
          <span v-else class="crumb-label text-sm">{{ crumb.label }}</span>
        </component>
        <span v-if="index < breadcrumbs.length - 1" class="mx-3"> / </span>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "Breadcrumbs",
  computed: {
    currentRoute() {
      const route = useRoute();
      return route.path;
    },
    breadcrumbs() {
      const route = useRoute();
      const matchedRoutes = route.matched.map(route => {
        return {
          label: route.meta.breadcrumb || route.name,
          path: route.path
        };
      });
      // console.log("*** matchedRoutes", matchedRoutes);

      // Since we are using the overview-page as default home page, the overview-page route is being detected twice.
      // Remove the duplicate route
      this.removeDuplicateRoute(matchedRoutes);

      // Add additional route at start for showing the home icon
      return [{ label: "home", path: "/" }].concat(matchedRoutes);
    }
  },
  methods: {
    removeDuplicateRoute(matchedRoutes) {
      if (
        matchedRoutes[matchedRoutes.length - 1].label ==
        matchedRoutes[matchedRoutes.length - 2].label
      ) {
        matchedRoutes.splice(matchedRoutes.length - 1);
      }
    }
  }
};
</script>
