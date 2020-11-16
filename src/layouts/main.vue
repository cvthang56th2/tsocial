<template>
  <v-layout class="wrap-page d-flex flex-column">
    
    <v-app-bar v-if="isLoggedIn" app color="primary" dark>
      <div class="d-flex align-center">
        <a @click.prevent="goTo({ name: 'HomePage' })">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 pointer"
            contain
            src="https://via.placeholder.com/40"
            transition="scale-transition"
            width="40"
          />
        </a>
      </div>
      <v-text-field type="text" placeholder="search..." />

      <v-spacer></v-spacer>

      <div class="d-flex">
        <div>
          <a @click.prevent="goTo({ name: 'ProfilePage' })">
            <img src="https://via.placeholder.com/40" alt="">
            name
          </a>
        </div>
        <span>icon1</span>
        <span>icon1</span>
        <v-btn class="pointer" @click="logout">logout</v-btn>
      </div>
    </v-app-bar>
    
    <v-main>
      <v-layout d-flex flex-1-1 over-flow-y-auto>
        <router-view />
      </v-layout>
    </v-main>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutMain',
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'  
    })
  },
  methods: {
    logout(){
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.successNotify({ title: 'Logout', message: 'Logout successfully!' })
          this.goTo({ name: 'LoginPage' })
        })
    }
  }
}
</script>