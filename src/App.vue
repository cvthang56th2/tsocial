<template>
  <v-app>
    <MainLayout />

    <notifications group="sysNoti" position="bottom right" />
  </v-app>
</template>

<script>
import MainLayout from './layouts/main.vue';

export default {
  name: 'App',

  components: {
    MainLayout
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.pointer {
  cursor: pointer;
}
.height-100vh {
  height: 100vh;
}
</style>
