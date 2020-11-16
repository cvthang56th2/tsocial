<template>
  <v-layout justify-center align-center height-100vh>
    <v-flex xs6>
      <h1>Register</h1>

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
        <a @click="goTo({name: 'LoginPage'})">Login</a>
        <v-btn @click="doRegister">Register</v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: '',
      errors: []
    };
  },
  methods: {
    doRegister () {
      const {email, password} = this;
      this.$store.dispatch('auth/register', {email, password})
        .then(() => {
          this.$router.push('/login');
        })
        .catch(error => {
          this.errors.push(error)
        });
    }
  }
};
</script>
