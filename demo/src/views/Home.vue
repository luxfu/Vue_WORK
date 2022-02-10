<script>
import vHeader from '@/components/Header.vue'
import vSidebar from '@/components/SideBar.vue'
export default {
  components: {
    vHeader,
    vSidebar,
  },
  setup() {},
}
</script>

<template>
  <v-header></v-header>
  <v-sidebar></v-sidebar>
  <div class="content-box">
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>