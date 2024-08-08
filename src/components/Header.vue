<template>
  <header class="bg-white py-2 px-4 border-b border-silver-400">
    <router-link to="/">
      <img class="p-xs" src="../assets/logo_procademy.svg" height="48" />
    </router-link>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
/* Adding p-xs since limited support for tailwind p-[1px] */
.p-xs {
  padding: 1px;
}
</style>
