<template>
  <div class="bg-gray-200">
    <Header />
    <Breadcrumbs class="m-3" />
    <main class="mx-3">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Breadcrumbs
  }
};
</script>
