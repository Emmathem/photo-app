<template lang="html">
    <div class="h-[280px] pictureCard rounded-md relative overflow-hidden cursor-pointer mb-8 transition shadow-md">
      <img :src="src" :alt="alt" @click="onImgClick" class="w-full h-[inherit] object-cover">
      <div class="bg-white absolute z-50 px-3 py-2 rounded-tr-md bottom-0 transition">
        <h4>{{ photo.name }}</h4>
        <h5>
          {{ photo.location }}
        </h5>
        <div v-if="!showFav" class="flex justify-center">
          <div class="flex items-center" @click="toggleLike(photo)">
            <span class="pr-2">Like</span>
            <font-awesome-icon icon="fa-solid fa-heart" class="text-red-500" />
            <span class="font-bold pl-3">{{ photo.likes }}</span>
          </div>
        </div>
        <div v-if="showFav" class="flex justify-center">
          <div class="flex items-center" @click="removeFromLike()">
            <span class="pr-2">Remove</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { notification } from 'ant-design-vue';
import {mapMutations} from "vuex";
export default {
  name: 'PhotoElement',
  // components: { HeartIcon },
  props: {
    photo: {
      type: Object,
      required: true
    },
    showFav: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'regular'
    }
  },
  data () {
    return {
      likedPhoto: []
    }
  },
  computed: {
    src () {
      return this.photo.urls[this.size]
    },
    alt () {
      return this.photo.description || 'photo-alt'
    },
    btnText () {
      return 'like'
    }
  },

  methods: {
    onImgClick () {
      this.$router.push({ name: 'Photo', params: { id: this.photo.id } })
    },
    toggleLike (photo) {
      this.$emit('addPictureToFav', photo);
      notification.success({
        message: 'Success',
        description: 'Added to your Fav library!'
      })
    },
    removeFromLike () {
      this.removeFromFav(this.photo);
      notification.success({
        message: 'Success',
        description: 'Removed from your Fav library!'
      })
    },
    onBtnClick () {
      console.log('Mark photo as fave')
    },
    ...mapMutations({
      removeFromFav: 'PhotoService/REMOVE_FROM_FAV',
    })
  }
}
</script>
