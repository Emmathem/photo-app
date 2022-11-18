<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>

export default {
  name: 'App',
  inject: ['client_id'],
  data () {
    return {
      mobileMenu: false
    }
  },
  mounted () {
    console.log(this.client_id, 'root');
    if (!this.client_id) {
      this.$router.push('/auth')
    }
  },
}
</script>

<style>
</style>
