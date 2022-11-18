<template lang="html">
    <div class="home-view">
      <Layout>
        <app-category-menu />
        <div class="mt-6">
          <!--        <h1>Home</h1>-->
          <PhotoList :photos="photos" @searchPhoto="searchPhoto"></PhotoList>
        </div>
      </Layout>
    </div>
</template>

<script>
import PhotoList from './PhotoList'
import * as PhotoService from '../http/PhotoService'
import AppCategoryMenu from '@/components/AppCategoryMenu'
import {mapActions} from "vuex";
import Layout from "@/components/defaults/Layout";

export default {
  name: 'HomeView',
  components: {
    Layout,
    AppCategoryMenu,
    PhotoList
  },

  data () {
    return {
      photos: []
    }
  },
  created () {
    PhotoService.list({ client_id: this.$root.client_id })
      .then(res => {
        this.photos = res.data
      })
      .catch(console.error)
    // this.getPhotosMethod()
  },
  methods: {
    async getPhotosMethod() {
      try {
        const resp = await this.getPhoto({client_id: this.$root.client_id})
        console.log('re', resp);
      } catch (e) {
        console.log('e', e.response);
      }
    },
    searchPhoto (searchObject) {
      PhotoService.searchPhotos(searchObject)
        .then((res) => {
          console.log(res)
        }).catch((e) => console.log(e))
    },
    ...mapActions({
      getPhoto: 'getPhotos'
    })
  }
}
</script>
