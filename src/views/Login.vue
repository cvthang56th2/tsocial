<template>
  <v-layout justify-center align-center height-100vh>
    <v-flex xs6>
      <h1>Login</h1>

      <div>
        <label>Email</label>
        <v-text-field type="email" placeholder="Email" v-model="email" />
      </div>

      <div>
        <label>Password</label>
        <v-text-field type="password" placeholder="Password" v-model="password" />
      </div>

      <div v-if="errors && errors.length">
        <div
          v-for="(error, eIndex) of errors"
          :key="`error-${eIndex}`"
          class="error--text"
        >{{error}}</div>
      </div>

      <v-layout justify-space-between align-center>
        <a @click="goTo({name: 'RegisterPage'})">Register</a>
        <v-btn @click="doLogin">Login</v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errors: []
    }
  },
  methods: {
    async doLogin() {
      try {
        const { email, password } = this
        await this.$store.dispatch('auth/login', { email, password })
        this.successNotify({ title: 'Login', message: 'Login successfully!' })
        this.goTo({ name: 'HomePage' })
      } catch (error) {
        this.errorNotify({ title: 'Login failed!', message: error })
      }
    }
  }
}
</script>
