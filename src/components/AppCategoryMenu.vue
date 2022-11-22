<template>
  <div class="lg:flex hidden bg-white shadow-md">
    <div class="flex flex-wrap py-3 px-4">
      <div v-for="(item, index) in CategoryMenu" :key="index">
        <div @click="searchPhotos(item.value)" class="px-4 border-r border-r-gray-500 cursor-pointer">
          <span class="flex items-center">
            <span class="pr-1 capitalize">
              {{ item.name }}
            </span>
            <font-awesome-icon icon="fa-solid fa-angle-down fa-2x" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { CategoryMenu } from '@/utils/localdata'
export default {
  name: 'AppCategoryMenu',
  data () {
    return {
      CategoryMenu
    }
  },
  methods: {
    searchPhotos (record) {
      this.$emit('searchPhotos', record)
    }
  }
}
</script>

<style scoped></style>
