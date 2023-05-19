<template>
  <header :class="{'scrolled-nav' : scrollPosition}">
  <nav>
    <div>
        <img src="@/assets/crest.png" alt="">
    </div>
    <ul v-show="!mobile" class="navigation">
    <li><router-link class="link" :to="{name: 'home'}">Home</router-link> </li>
    <li><router-link class="link" :to="{name: 'games'}">Games</router-link> </li>
    <li><router-link class="link" :to="{name: 'roster'}">Roster</router-link> </li>
    <li><router-link class="link" :to="{name: 'interest'}">Intrest</router-link> </li>
    </ul>
  </nav>
  <div class="icon">
    <i @click="toggleMobileNav" v-shpw="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
  </div>
  <transition name="mobileNav">
    <ul v-show="mobileNav" class="dropdown-nav">
    <li><router-link class="link" :to="{name: 'home'}">Home</router-link> </li>
    <li><router-link class="link" :to="{name: 'games'}">Games</router-link> </li>
    <li><router-link class="link" :to="{name: 'roster'}">Roster</router-link> </li>
    <li><router-link class="link" :to="{name: 'interest'}">Intrest</router-link> </li>
    </ul>
  </transition>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>


</style>