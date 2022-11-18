<template lang="html">
    <div class="auth-view flex h-screen w-screen items-center justify-center">
      <div class="w-1/3 m-auto shadow-md rounded-lg p-6 py-20 px-12">
        <div v-if="hasError" class="bg-red-200 border border-red-400 py-3 px-4 rounded-md mb-4 transition">
          <p class="text-red-900">Please, Enter valid access key</p>
        </div>
        <form action="#" @submit.prevent="onSubmit">
          <label for="client_id" class="pb-2 font-bold">Access Key:</label>
          <input type="text" id="client_id" v-model="client_id" class="border border-gray-400 block w-full px-6 my-2 h-[50px] rounded-md">
          <div class="flex items-center mt-10 justify-center">
            <BaseButton type="submit" variant="primary" text="Submit" />
            <BaseButton type="reset" variant="danger" text="Reset" />
          </div>
        </form>
      </div>
    </div>
</template>

<script>
// import PhotoElement from './PhotoElement'
import BaseButton from '@/components/BaseButton'

export default {
  name: 'AuthView',
  components: {
    BaseButton
  },

  data () {
    return {
      client_id: this.$root.client_id,
      hasError: false
    }
  },

  methods: {
    onSubmit () {
      if (this.client_id === 'null' || this.client_id === undefined) {
        this.hasError = true
        return
      }
      this.hasError = false
      localStorage.setItem('client_id', this.client_id)
      this.$root.client_id = this.client_id
      this.$router.push('/')
    },
    onReset () {
      this.hasError = false
      this.client_id = null
      this.$root.client_id = null
      localStorage.removeItem('client_id')
    }
  }
}
</script>
