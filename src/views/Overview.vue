<template>
  <div class="overview-page bg-white p-5 rounded-md flex flex-col gap-6">
    <div class="page-intro flex flex-col gap-1">
      <h1 class="text-xl font-bold">My training profiles</h1>
      <p class="text-sm">Overiew of required training profiles</p>
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
