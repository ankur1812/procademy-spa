<template>
  <div class="bg-white p-2 rounded-md">
    <h1 class="text-xl font-bold">My training profiles</h1>
    <p>Overiew of required training profiles</p>
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
