<template lang="html">
  <LayoutFile>
    <div class="home-view">
        <UserCard v-if="photo.user.username" :username="photo.user.username"></UserCard>
        <PhotoElement :photo="photo"></PhotoElement>
    </div>
  </LayoutFile>
</template>

<script>
import PhotoElement from './PhotoElement'
import UserCard from './UserCard'
import * as PhotoService from '../http/PhotoService'
import LayoutFile from "@/components/defaults/Layout";

export default {
  name: 'PhotoView',

  components: {
    LayoutFile,
    PhotoElement,
    UserCard
  },

  data () {
    return {
      photo: {
        urls: {},
        user: {}
      }
    }
  },

  created () {
    PhotoService.get(this.$route.params.id, { client_id: this.$root.client_id })
      .then(res => {
        this.photo = res.data
      })
      .catch(console.error)
  }
}
</script>
