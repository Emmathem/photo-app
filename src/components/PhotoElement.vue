<template lang="html">
    <div class="h-[280px] pictureCard rounded-md relative overflow-hidden cursor-pointer mb-8 transition shadow-md">
      <img :src="src" :alt="alt" @click="onImgClick" class="w-full h-[inherit] object-cover">
      <div class="bg-white absolute z-50 px-3 py-2 rounded-tr-md bottom-0 transition">
        <h4>{{ photo.name }}</h4>
        <h5>
          {{ photo.location }}
        </h5>
        <div class="flex justify-center">
          <div class="flex items-center" @click="toggleLike(photo)">
            <span class="pr-2">Like</span>
<!--            <heart-icon class="text-red-800" />-->
            <font-awesome-icon icon="fa-solid fa-heart" />
            <span class="font-bold pl-3">{{ photo.likes }}</span>
          </div>
<!--          <div>Unlike <heart-icon /></div>-->
        </div>
      </div>
<!--        <button type="button" @click="onBtnClick">{{ btnText }}</button>-->
    </div>
</template>

<script>
// import { HeartIcon } from 'vue-feather-icons'
export default {
  name: 'PhotoElement',
  // components: { HeartIcon },
  props: {
    photo: {
      type: Object,
      required: true
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
      this.likedPhoto.push(photo)
    },
    onBtnClick () {
      console.log('Mark photo as fave')
    }
  }
}
</script>
