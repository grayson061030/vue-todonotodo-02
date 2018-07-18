<template>
  <div>
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Sidebar from './Sidebar';

    export default {
        name: "Dash",
      components: {
          sidebar: Sidebar
      }
    }
</script>

<style scoped>

</style>
