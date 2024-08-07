<template>
  <div class="competence-item flex border border-gray-400 p-3 rounded-md">
    <div class="flex gap-7 w-7/12">
      <svg
        width="49"
        height="70"
        viewBox="0 0 49 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Rectangle 14"
          d="M0 12.22C0 5.59255 5.37258 0.219971 12 0.219971H37C43.6274 0.219971 49 5.59255 49 12.22V52.9321L29.2854 67.6479C26.4469 69.7667 22.5531 69.7667 19.7146 67.6479L0 52.9321V12.22Z"
          fill="#A5B4FC"
        />
      </svg>
      {{ skill.title }}
    </div>
    <div class="w-5/12">
      <progress-bar :achieved="skill.achieved" :required="skill.required" />
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "CompetenceItem",
  components: {
    ProgressBar
  },
  props: {
    skill: { type: Object, default: () => {} },
    view: { type: String, default: "list" }
  }
};
</script>
