<template>
  <aside class="navigation" :class="mobileMenu ? 'active' : 'inactive'">
    <div class="navigation__closeMenu lg:hidden block">
      <font-awesome-icon icon="fa fa-indent" @click="toggleMobileMenu" />
    </div>
    <div class="navigation__header">
      <img src="../../assets/images/logo.jpeg" alt="logo" />
    </div>
    <div class="navigation__nav">
      <ul>
        <li @click="searchPhotos">
          <router-link to="/" class="active">
            <div class="icons">
              <font-awesome-icon icon="fa-solid fa-user-secret" />
            </div>
            <div>Home</div>
          </router-link>
        </li>
        <li>
          <router-link to="/faves">
            <div class="icons">
              <font-awesome-icon icon="fa-solid fa-heart" />
            </div>
            <div>My Fav</div>
          </router-link>
        </li>
      </ul>
      <h4>Share</h4>
      <ul>
        <li>
          <router-link to="/">
            <div class="icons">
              <font-awesome-icon icon="fa-solid fa-certificate" />
            </div>
            <div>Ranking</div></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><div class="icons">
            <font-awesome-icon icon="fa-solid fa-signal" />
          </div>
            <div>Challenge</div></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><div class="icons">
            <font-awesome-icon icon="fa-solid fa-drum" />
          </div>
            <div>Party</div></router-link
          >
        </li>
        <li>
          <router-link to="/">
            <div class="icons">
              <font-awesome-icon icon="fa-solid fa-globe" />
            </div>
            <div>Connect</div></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><div class="icons">
            <font-awesome-icon icon="fa-solid fa-users" />
          </div>
            <div>Group</div></router-link
          >
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapActions } from 'vuex'
import { LOGGER } from '@/utils/miscelleous'

export default {
  name: 'AppNavigation',
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
        await this.getPhotos({client_id: this.$root.client_id})
        this.loading = false
      } catch (e) {
        LOGGER('e', e)
        this.$notification.error({
          message: 'Error',
          description: e,
          duration: 10
        })
      }
    },
    ...mapActions("PhotoService", ['getPhotos'])
  }
}
</script>

<style scoped></style>
