<template>
  <div class="competences flex flex-col gap-4">
    <h1>Competences</h1>
    <div class="radio-container">
      <RadioButton v-model="currentView" :options="availableViews" />
    </div>
    <div
      class="flex flex-wrap gap-4"
      :class="{
        'flex-col': currentView == 'list',
        'flex-row': currentView !== 'list'
      }"
    >
      <div
        v-for="skill in skills"
        :key="skill.id"
        :class="{
          'w-full': currentView == 'list',
          'w-small': currentView == 'grid'
        }"
      >
        <competence-item :skill="skill" :view="currentView" />
      </div>
    </div>
  </div>
</template>

<script>
import CompetenceItem from "./CompetenceItem";
import RadioButton from "./RadioButton";

export default {
  name: "CompetenceList",
  components: {
    CompetenceItem,
    RadioButton
  },
  props: {
    skills: { type: Array, default: () => [] }
  },
  data() {
    return {
      currentView: "list",
      availableViews: [
        { name: "List", value: "list" },
        { name: "Grid", value: "grid" }
      ]
    };
  }
};
</script>
<style scoped>
@media screen and (max-width: 767px) {
  .w-small {
    width: 100%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .w-small {
    width: 45%;
  }
}
@media screen and (min-width: 1024px) {
  .w-small {
    width: 30%;
  }
}
</style>
