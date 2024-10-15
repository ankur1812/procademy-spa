<template>
  <div class="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 bg-slate-100">
    <Header />
    <Breadcrumbs class="mx-3 lg:mx-4" />
    <main class="mx-3 md:mx-4">
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
