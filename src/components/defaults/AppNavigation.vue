<template>
  <aside class="navigation" :class="mobileMenu ? 'active' : 'inactive'">
    <div class="navigation__closeMenu lg:hidden block">
      <menu-icon @click="toggleMobileMenu" type="menu-unfold" />
    </div>
    <div class="navigation__header">
      <img src="../../assets/images/logo.jpeg" alt="logo" />
    </div>
    <div class="navigation__nav">
      <ul>
        <li @click="searchPhotos">
          <router-link to="/" class="active">
            <div class="icons">
              <home-icon size="1x" />
            </div>
            <div>Home</div>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <div class="icons">
              <message-circle-icon size="1x" />
            </div>
            <div>Message</div>
          </router-link>
        </li>
      </ul>
      <h4>Share</h4>
      <ul>
        <li>
          <router-link to="/">
            <div class="icons"><git-branch-icon size="1x" /></div>
            <div>Ranking</div></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><div class="icons"><globe-icon size="1x" /></div>
            <div>Challenge</div></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><div class="icons"><user-plus-icon size="1x" /></div>
            <div>Party</div></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><div class="icons"><wifi-icon size="1x" /></div>
            <div>Connect</div></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><div class="icons"><user-plus-icon size="1x" /></div>
            <div>Group</div></router-link
          >
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapActions } from 'vuex'
import { HomeIcon, MenuIcon, MessageCircleIcon, GitBranchIcon, WifiIcon, UserPlusIcon, GlobeIcon } from 'vue-feather-icons'
import { LOGGER } from '@/utils/miscelleous'

export default {
  name: 'AppNavigation',
  components: {
    HomeIcon,
    MenuIcon,
    MessageCircleIcon,
    GitBranchIcon,
    WifiIcon,
    UserPlusIcon,
    GlobeIcon
  },
  props: {
    mobileMenu: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: false,
      loading: false,
      searchObject: {
        page: 1,
        per_page: 10,
        order_by: 'relevant'
      }
    }
  },
  methods: {
    toggleMobileMenu () {
      this.$emit('toggleMenu')
    },
    async searchPhotos () {
      try {
        this.loading = true
        await this.fetchAllImages()
        this.loading = false
      } catch (e) {
        LOGGER('e', e)
        this.loading = false
        this.$notification.error({
          message: 'Error',
          description: e,
          duration: 10
        })
      }
    },
    ...mapActions({
      fetchAllImages: 'getAllImages/FETCH_ALL_PHOTOS',
      searchPhoto: 'getAllImages/SEARCH_ONE_PHOTO'
    })
  }
}
</script>

<style scoped></style>
