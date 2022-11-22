<template>
<LayoutFile>
  FavPhotoComponent
</LayoutFile>
</template>

<script>
import LayoutFile from "@/components/defaults/Layout";
import {mapState} from "vuex";
export default {
  name: "FavPhotoComponent",
  components: {LayoutFile},
  computed: {
    ...mapState('PhotoService', {
      favPhotos: (state => state.favPhotos)
    })
  },
}
</script>

<style scoped>

</style>