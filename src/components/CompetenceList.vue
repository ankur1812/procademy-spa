<template>
  <div class="competences flex flex-col gap-4">
    <h1>Competences</h1>
    <div
      class="flex flex-wrap gap-4"
      :class="{
        'flex-col': true
      }"
    >
      <div
        v-for="skill in skills"
        :key="skill.id"
        :class="{
          'w-full': true
        }"
      >
        <competence-item :skill="skill" :view="currentView" />
      </div>
    </div>
  </div>
</template>

<script>
import CompetenceItem from "./CompetenceItem";

export default {
  name: "CompetenceList",
  components: {
    CompetenceItem
  },
  props: {
    skills: { type: Array, default: () => [] }
  }
};
</script>
