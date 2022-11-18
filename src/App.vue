<template>
  <div class="default wrapper">
    <app-navigation :mobile-menu="mobileMenu" @toggleMenu="toggleMobileMenu" />
    <section class="sectionContainer">
      <app-header :mobile-menu="mobileMenu" @toggleMenu="toggleMobileMenu" />
      <RouterView />
    </section>
    <div
        class="onMenuOpen"
        :class="!mobileMenu ? 'open' : ''"
        @click="elementClicked"
    ></div>
  </div>
</template>

<script>
import AppNavigation from "@/components/defaults/AppNavigation";
import AppHeader from "@/components/defaults/AppHeader";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppNavigation,
  },
  data () {
    return {
      mobileMenu: false
    }
  },
  mounted () {
    if (!this.$root.client_id) {
      this.$router.push('/auth')
    }
  },
  methods: {
    toggleMobileMenu () {
      this.mobileMenu = !this.mobileMenu
    },
    elementClicked () {
      this.mobileMenu = true
    }
  }
}
</script>

<style>
</style>
