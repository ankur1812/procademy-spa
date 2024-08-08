<template>
  <div
    class="overview-page bg-white rounded-2xl flex flex-col gap-4 sm:gap-5 md:gap-6 p-3 sm:p-4 md:p-5 "
  >
    <div class="page-intro flex flex-col gap-1">
      <h1 class="text-slate-800 text-xl font-bold">My training profiles</h1>
      <p class="text-slate-500 text-sm">
        Overiew of required training profiles
      </p>
    </div>
    <Grid />
  </div>
</template>

<script>
import Grid from "../components/Grid.vue";

export default {
  name: "Overview",
  components: { Grid }
};
</script>
