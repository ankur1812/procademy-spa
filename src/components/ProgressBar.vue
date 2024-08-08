<template>
  <div
    class="progress-bar rounded-[50px] w-full h-2 bg-slate-100 relative overflow-hidden"
  >
    <div
      class="h-full"
      :style="{
        width: progressPercentage + '%'
      }"
    >
      <div
        class="progress-fill h-full w-full animate-width bg-emerald-500"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    achieved: {
      type: Number,
      required: true
    },
    required: {
      type: Number,
      required: true
    }
  },
  computed: {
    progressPercentage() {
      return (this.achieved / this.required) * 100;
    }
  }
};
</script>

<style scoped>
.animate-width {
  animation: start-animation 0.7s ease-in-out;
}

@keyframes start-animation {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
