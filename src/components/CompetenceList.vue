<template>
  <div class="competences flex flex-col gap-4 sm:gap-5 md:gap-6">
    <div class="radio-box hidden md:flex md:justify-end">
      <RadioButton v-model="currentView" :options="availableViews" />
    </div>
    <div
      class="flex flex-wrap gap-4 sm:gap-5 md:gap-6"
      :class="{
        'flex-col': currentView == 'list',
        'flex-row': currentView == 'grid'
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
  /* Using CSS to implement 'sm:w-full md:w-[calc(50% - 12px)] lg:w-[calc(33.3%-16px)]' class since they are overriding */
  .w-small {
    width: 100%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .w-small {
    width: calc(50% - 12px);
  }
}
@media screen and (min-width: 1024px) {
  .w-small {
    width: calc(33.3% - 16px);
  }
}
</style>
