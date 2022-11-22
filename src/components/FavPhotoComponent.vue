<template>
  <LayoutFile>
    <h3 class="font-bold text-lg py-4">My FAV Pictures in One Place</h3>
    <div v-if="favPhotos.length > 0" class="grid lg:grid-cols-6 grid-col-1 gap-10">
      <PhotoElement
          v-for="photo in favPhotos"
          :key="photo.id"
          :show-fav="true"
          :photo="photo"
      />
    </div>
    <EmptyData v-else />
  </LayoutFile>
</template>

<script>
import LayoutFile from "@/components/defaults/Layout";
import {mapState} from "vuex";
import PhotoElement from "@/components/PhotoElement";
import EmptyData from "@/components/EmptyData";
export default {
  name: "FavPhotoComponent",
  components: {EmptyData, PhotoElement, LayoutFile},
  computed: {
    ...mapState('PhotoService', {
      favPhotos: (state => state.favPhotos)
    })
  },
}
</script>

<style scoped>

</style>