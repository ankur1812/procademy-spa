<template>
  <header class="bg-white p-4 border-b border-silver-400">
    <div class="flex gap-2">
      <img src="../assets/procademy.png" width="18" height="24" />
      <h2 class="font-bold">Procademy</h2>
    </div>
    <nav>
      <ul class="list-none m-0 p-0">
        <!-- <li><router-link to="/">OverView</router-link></li> -->
        <!-- <li><router-link to="/about">About</router-link></li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
nav a {
  color: white;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>
