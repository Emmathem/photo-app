<template lang="html">
    <div class="grid lg:grid-cols-6 grid-col-1 gap-10">
        <PhotoElement v-for="photo in photos" :key="photo.id" :photo="photo"></PhotoElement>
    </div>
</template>

<script>
import PhotoElement from './PhotoElement'

export default {
  name: 'PhotoList',

  components: {
    PhotoElement
  },

  props: {
    photos: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
