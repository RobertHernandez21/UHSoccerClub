<template>
  <div>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/games" class="nav-link">Games</router-link>
      <router-link to="/roster" class="nav-link">Roster</router-link>
      <router-link to="/interest" class="nav-link">Player Interest</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // Add component logic here
}
</script>

<style scoped>
nav {
  background-color: black;
  color: white;
}

.nav-link {
  display: block;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  color: white;
}

.nav-link:hover {
  background-color: red;
}

</style>

