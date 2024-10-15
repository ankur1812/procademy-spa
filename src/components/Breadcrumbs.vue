<template>
  <nav>
    <ul id="breadcrumbs" class="flex p-0 m-0">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <component
          :is="route?.path != crumb.path ? 'router-link' : 'span'"
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
    route() {
      const route = useRoute();
      return route;
    },
    breadcrumbs() {
      const route = this.route;
      let matchedRoutes =
        this.route?.matched?.map(route => {
          return {
            label: route.meta.breadcrumb || route.name,
            path: route.path
          };
        }) || [];
      // If route data is undefined, can also be fallback to Overview Homepage ([{ label: "My training profiles", path: "/" }])

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
        matchedRoutes[matchedRoutes.length - 1]?.label ==
        matchedRoutes[matchedRoutes.length - 2]?.label
      ) {
        matchedRoutes.splice(matchedRoutes.length - 1);
      }
    }
  }
};
</script>
