<template>
  <div class="bg-white p-5 rounded-md flex flex-col gap-6 self-strech">
    <router-link class="font-bold text-gray-500" to="/">
      &lt; Back to overview
    </router-link>
    <div v-if="profile" class="profile-main flex flex-col gap-1 text-gray-500">
      <h1 class="text-lg font-bold flex items-center gap-1">
        {{ profile?.title }}
        <span
          class="badge text-xs ml-1 py-0.5 px-2 rounded-lg"
          :class="{
            'bg-green-200 text-green-950': profile.achieved,
            'bg-red-200 text-red-950': !profile.achieved
          }"
        >
          {{ profile?.achieved ? "Certified" : "In Progress" }}
        </span>
      </h1>
      <p>{{ profile.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
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
      // console.log(this.profile);
      return;
    }
  },
  mounted() {
    this.fetchProfileData();
  }
};
</script>
