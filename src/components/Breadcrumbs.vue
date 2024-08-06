<template>
  <nav>
    <ul class="breadcrumbs flex p-0 m-0">
      <li class="mr-2" v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link
          class="no-underline text-gray-500 hover:text-gray-700"
          :to="crumb.path"
          >{{ crumb.label }}</router-link
        >
        <span v-if="index < breadcrumbs.length - 1"> / </span>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Breadcrumbs",
  setup() {
    const route = useRoute();

    const crumbsHash = {
      0: "Home",
      1: "My training profiles",
    };

    const breadcrumbs = computed(() => {
      const matchedRoutes = route.matched;
      return matchedRoutes.map((route, index) => {
        const label = route.meta.breadcrumb || route.name || crumbsHash[index];
        const path = matchedRoutes
          .slice(0, index + 1)
          .map((r) => r.path)
          .join("");
        return {
          label,
          path,
        };
      });
    });

    return { breadcrumbs };
  },
};
</script>
