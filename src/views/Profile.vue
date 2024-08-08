<template>
  <div class="profile-page bg-white rounded-2xl">
    <div
      class="profile-page-contents p-3 sm:p-4 md:p-5 rounded-md flex flex-col gap-4 sm:gap-5 md:gap-6 self-strech"
    >
      <router-link class="flex gap-2 py-2 font-bold text-slate-500" to="/">
        <i class="icons8-back"></i> Back to overview
      </router-link>
      <div
        v-if="profile"
        class="profile-main text-slate-500 flex flex-col gap-1 text-slate-500"
      >
        <h1 class="text-lg font-bold text-slate-500 flex items-center gap-2">
          {{ profile?.title }}
          <span
            class="badge text-xs py-1.5 px-2 rounded-lg"
            :class="{
              'bg-emerald-200 text-emerald-950': profile.achieved,
              'bg-red-200 text-red-950': !profile.achieved
            }"
          >
            {{ profile?.achieved ? "Certified" : "In Progress" }}
          </span>
        </h1>
        <p class="text-slate-500">{{ profile.description }}</p>
      </div>
      <competence-list :v-if="profile" :skills="profile?.competences" />
    </div>
  </div>
</template>

<script>
import CompetenceList from "../components/CompetenceList.vue";
export default {
  name: "Profile",
  components: { CompetenceList },
  data() {
    return {
      profile: null,
      serviceURI:
        "https://proc-front-dev-task.wiremockapi.cloud/training_profile/"
    };
  },
  methods: {
    async fetchProfileData() {
      let profileApiData = await fetch(this.serviceURI + this.$route.query.id);
      this.profile = await profileApiData.json();
      console.log(this.profile);
      return;
    }
  },
  mounted() {
    this.fetchProfileData();
  }
};
</script>

<style scoped>
.profile-page-contents {
  max-width: 1148px;
}
</style>
