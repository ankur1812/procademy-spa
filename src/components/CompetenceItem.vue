<template>
  <div class="competence-item flex border border-gray-400 p-3 rounded-md">
    <div class="flex gap-7 w-7/12">
      <div class="relative">
        <BadgeIcon :achieved="skill.achieved == skill.required"></BadgeIcon>
      </div>
      {{ skill.title }}
    </div>
    <div class="w-5/12">
      <progress-bar :achieved="skill.achieved" :required="skill.required" />
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import BadgeIcon from "./BadgeIcon.vue";
export default {
  name: "CompetenceItem",
  components: {
    ProgressBar,
    BadgeIcon
  },
  props: {
    skill: { type: Object, default: () => {} },
    view: { type: String, default: "list" }
  }
};
</script>
