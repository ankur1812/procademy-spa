<template>
  <div class="progress-bar-container w-full relative flex gap-3">
    <div
      class="progress-bar w-full h-4 bg-gray-100 relative rounded border-b border-gray-100 overflow-hidden"
    >
      <div
        class="h-full"
        :style="{
          width: progressPercentage + '%'
        }"
      >
        <div
          class="progress-fill h-full w-full animate-width bg-green-500"
        ></div>
      </div>
    </div>
    <span class="font-bold w-24 text-right">
      {{ achieved }} / {{ required }}</span
    >
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
