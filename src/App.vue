<template>
  <v-app>
    <MainLayout />
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

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
