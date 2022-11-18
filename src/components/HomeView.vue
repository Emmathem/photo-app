<template lang="html">
    <div class="home-view">
      <app-category-menu />
      <div class="mt-6">
<!--        <h1>Home</h1>-->
        <PhotoList :photos="photos" @searchPhoto="searchPhoto"></PhotoList>
      </div>
    </div>
</template>

<script>
import PhotoList from './PhotoList'
import * as PhotoService from '../http/PhotoService'
import AppCategoryMenu from '@/components/AppCategoryMenu'

export default {
  name: 'HomeView',

  components: {
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
  },
  methods: {
    searchPhoto (searchObject) {
      PhotoService.searchPhotos(searchObject)
        .then((res) => {
          console.log(res)
        }).catch((e) => console.log(e))
    }
  }
}
</script>
