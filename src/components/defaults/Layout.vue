<template>
  <div class="default wrapper">
    <app-navigation v-if="$root.client_id" :mobile-menu="mobileMenu" @toggleMenu="toggleMobileMenu" />
    <section :class="$root.client_id ? 'sectionContainer' : ''">
      <app-header
          v-if="$root.client_id"
          :mobile-menu="mobileMenu"
          @toggleMenu="toggleMobileMenu"
      />
      <slot />
    </section>
    <div
        v-if="$root.client_id"
        class="onMenuOpen"
        :class="!mobileMenu ? 'open' : ''"
        @click="elementClicked"
    ></div>
  </div>
</template>

<script>
import AppHeader from "@/components/defaults/AppHeader";
import AppNavigation from "@/components/defaults/AppNavigation";

export default {
  name: "LayoutFile",
  components: {AppNavigation, AppHeader},
  data () {
    return {
      mobileMenu: false,
    }
  },
  methods: {
    toggleMobileMenu () {
      this.mobileMenu = !this.mobileMenu
    },
    elementClicked () {
      this.mobileMenu = true
    },
  }
}
</script>

<style scoped>

</style>