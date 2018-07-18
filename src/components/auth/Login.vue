<template>
  <div>
    <h3 class="text-center">Login</h3>
    <input type="text" class="form-control m-b-15" placeholder="email address"
           v-model="user.email">
    <input type="password" class="form-control" placeholder="password"
           v-model="user.password">
    <hr>
    <button class="btn btn-lg btn-primary btn-block m-b-15"
            @click="login">Sign In</button>
    <p class="text-center">
      Don't have an account? <router-link to="/auth/register">Sign up!</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: function () {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login: function () {
        this.$http.post('/users/login',this.user)
          .then(function (res) {
            this.$auth.setToken(res.body.token, Date.now() + 14400000) // + 4 hours
            this.$router.push('/newidea');
          });
      }
    }
  }
</script>

<style scoped>

</style>
