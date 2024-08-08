<template>
  <div
    class="competence-item flex items-center border border-slate-200 p-3 sm:p-4 md:p-5 lg:p-6 rounded-2xl"
  >
    <div
      class="flex items-center"
      :class="{
        'w-auto md:w-1/2': view != 'grid'
      }"
    >
      <div class="mr-4">
        <BadgeIcon :achieved="skill.achieved == skill.required"></BadgeIcon>
      </div>
      <!-- Skill Title is added in both the flex-divs. -->
      <!-- This is done to maintain the width ratio of 1:1 for tablet/desktop screens for List View -->
      <!-- Below title will be displayed  next to the competence-badge icon only for List view (except on mobile)-->
      <span
        v-if="view == 'list'"
        class="text-slate-800 text-base font-bold hidden md:block"
        >{{ skill.title }}</span
      >
    </div>
    <div
      class="flex items-center w-full"
      :class="{
        'w-full flex-col': view == 'grid',
        'flex-col md:flex-row': view == 'list'
      }"
    >
      <!-- For List View (mobile screens) and Grid View (all screens) the skill name is shown above the progressbar -->
      <span
        class="w-full text-slate-800 text-base font-bold"
        :class="{
          'block md:hidden': view == 'list'
        }"
        >{{ skill.title }}</span
      >
      <div class="flex items-center w-full">
        <progress-bar :achieved="skill.achieved" :required="skill.required" />
        <span class="text-xs font-bold w-32 text-right lining-nums">
          {{ skill.achieved }} / {{ skill.required }}</span
        >
      </div>
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
