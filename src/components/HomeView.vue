<template lang="html">
    <div class="home-view">
      <Layout @searchPhotos="searchPhotosMethod">
        <app-category-menu @searchPhotos="searchPhotosMethod" />
        <div class="mt-6">
          <!--        <h1>Home</h1>-->
          <base-loader v-if="fetching" />
          <PhotoList
              v-if="!fetching && photos.length > 0"
              :photos="photos"
              @searchPhotosMethod="searchPhotosMethod"
          />
          <EmptyData v-if="!fetching && photos.length <= 0" />
        </div>
      </Layout>
    </div>
</template>

<script>
import PhotoList from './PhotoList'
import * as PhotoService from '../http/PhotoService'
import AppCategoryMenu from '@/components/AppCategoryMenu'
import {mapActions, mapState} from "vuex";
import Layout from "@/components/defaults/Layout";
import BaseLoader from "@/components/BaseLoader";
import EmptyData from "@/components/EmptyData";

export default {
  name: 'HomeView',
  components: {
    EmptyData,
    BaseLoader,
    Layout,
    AppCategoryMenu,
    PhotoList
  },

  data () {
    return {
      // photos: [],
      // fetching: false,
    }
  },
  computed: {
    ...mapState('PhotoService', {
      photos: (state) => state.photos,
      fetching: (state) => state.fetching,
    })
  },
  created () {
    // PhotoService.list({ client_id: this.$root.client_id })
    //   .then(res => {
    //     this.photos = res.data
    //   })
    //   .catch(console.error)
    this.listAllPhotos();
  },
  methods: {
    async searchPhotosMethod(search) {
      const searchObj = {
        client_id: this.$root.client_id,
        query: search,
      };
      this.fetching = true;
      try {
        const resp = await this.searchForPhotos(searchObj)
        console.log('search', resp);
        this.fetching = false;
      } catch (e) {
        console.log('e', e.response);
        // if (e.response.status === 404) {
        //   this.$toast.error(e.response.data.error[0]);
        // }
        this.fetching = false;
      }
    },
    async listAllPhotos() {
      try {
        this.fetching = true;
        await this.getPhotos({ client_id: this.$root.client_id })
        setTimeout(() => { this.fetching = false }, 400);
      } catch (e) {
        console.log(e.response);
        this.fetching = false
      }
    },
    searchPhotos (searchObject) {
      PhotoService.searchPhotos(searchObject)
        .then((res) => {
          console.log(res)
        }).catch((e) => console.log(e))
    },
    ...mapActions("PhotoService", ['searchForPhotos', 'getPhotos']),
  }
}
</script>
