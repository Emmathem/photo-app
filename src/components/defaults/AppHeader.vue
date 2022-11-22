<template>
  <header class="header">
    <div class="header__mobile hideOnWeb" @click="toggleMobileMenu">
      <!-- {{ mobileMenu === false ? <a-icon type="menu-fold" /> : 'd'}} -->
      <font-awesome-icon icon="fa fa-indent" @click="toggleMobileMenu" />
    </div>
    <div class="lg:block hidden flex-1 rounded-md overflow-hidden">
      <div class="flex bg-white shadow-md">
        <div class="flex flex-1 items-center mr-4">
          <div class="px-3 pl-5">
            <font-awesome-icon icon="fa-solid fa-search" />
          </div>
          <input
            v-model="searchObject.query"
            type="search"
            class="w-full pl-4 h-12 focus:outline-none border-0"
            placeholder="Find Something..."
          />
        </div>
        <div class="py-1">
          <base-button type="primary" text="Search" :processing="loading" @click="searchPhotosMethod" styles="bg-gray-800" />
        </div>
      </div>
      <p v-if="error" class="text-red-500 py-3 text-sm">{{ error }}</p>
    </div>
    <div class="header__nav">
      <div class="header__nav__notify" @click="openNotification">
        <font-awesome-icon icon="fa-solid fa-bell fa-4x" class="text-lg" />
        <div class="count"><span>3</span></div>
      </div>
      <div class="header__notify !top-[4rem]" :class="active ? 'active' : 'inactive'">
        <div class="header__notify__container">
          <div class="header__notify__image">
            <img src="../../assets/images/images2.jpeg" alt="u" />
          </div>
          <div class="header__notify__text">
            <h5>Micheal like you!</h5>
            <h6>About 20minutes ago</h6>
          </div>
          <div class="header__notify__icon">
            <span>&#9829;</span>
          </div>
        </div>
        <div class="header__notify__container">
          <div class="header__notify__image">
            <img src="../../assets/images/images2.jpeg" alt="u" />
          </div>
          <div class="header__notify__text">
            <h5>Jack like you!</h5>
            <h6>About 40minutes ago</h6>
          </div>
          <div class="header__notify__icon">
            <span style="color: #f00">&#9829;</span>
          </div>
        </div>
        <div class="header__notify__container">
          <div class="header__notify__image">
            <img src="../../assets/images/images1.jpeg" alt="u" />
          </div>
          <div class="header__notify__text">
            <h5>Martin commented on your photo!</h5>
            <h6>About 56minutes ago</h6>
          </div>
          <div class="header__notify__icon">
            <span><img src="../../assets/images/chat.png" alt="c"/></span>
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center ">
          <div class="w-[50px] object-contain overflow-hidden relative">
            <img src="../../assets/images/images.jpeg" alt="user" />
            <div class="w-[15px] h-[15px] rounded-full bg-green-500 flex items-center absolute bottom-0 right-0 z-50"></div>
          </div>
          <div class="flex items-center ml-3 cursor-pointer" @click="gotoProfile">
            <span class="text-md pr-3">Abigail</span>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="header__search__mobile hideOnWeb">
      <a-input-search
        v-model="searchObject.query"
        placeholder="Find Something..."
      />
    </div>-->
  </header>
</template>

<script>
import { LOGGER } from '@/utils/miscelleous'
import {mapActions, mapState} from 'vuex'
import BaseButton from '@/components/BaseButton'
// import * as PhotoService from '@/http/PhotoService'
export default {
  name: 'AppHeader',
  components: {
    BaseButton,
  },
  data () {
    return {
      active: false,
      loading: false,
      mobileMenu: false,
      searchObject: {
        query: '',
        page: 1,
        per_page: 10,
        order_by: 'relevant'
      },
      error: ''
    }
  },
  computed: {
    ...mapState({})
  },
  methods: {
    gotoProfile () {
      LOGGER('this', this)
      // this.$router.push('/')
    },
    toggleMobileMenu () {
      this.$emit('toggleMenu')
    },
    openNotification () {
      LOGGER('active', this.active)
      this.active = !this.active
    },
    async searchPhotosMethod() {
      if (this.searchObject.query === '') {
        this.error = 'Enter a search query'
        return;
      }
      const searchObj = {
        ...this.searchObject,
        // client_id: this.$root.client_id,
        query: this.searchObject.query,
      };
      this.error = '';
      await this.searchForPhotos(searchObj);
    },
    ...mapActions("PhotoService", ['searchForPhotos', 'getPhotos'])
  }
}
</script>

<style scoped></style>
