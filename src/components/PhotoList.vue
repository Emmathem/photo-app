<template lang="html">
    <div class="grid lg:grid-cols-6 grid-col-1 gap-10">
        <PhotoElement
            v-for="photo in photos"
            :key="photo.id"
            :photo="photo"
            :has-fav="false"
            @addPictureToFav="addPictureToFav"
        />
    </div>
</template>

<script>
import PhotoElement from './PhotoElement'
import {mapMutations} from "vuex";

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
  },
  methods: {
    addPictureToFav(photo) {
      this.addToFav(photo);
    },
    ...mapMutations({
      addToFav: 'PhotoService/ADD_TO_FAV'
    })
  },
}
</script>
