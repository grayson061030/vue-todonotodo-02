<template>
  <div>
    <h3 class="text-center">Login</h3>
    <input type="text" class="form-control m-b-15" placeholder="Username">
    <input type="password" class="form-control" placeholder="Password">
    <hr>
    <button class="btn btn-lg btn-primary btn-block m-b-15">Sign In</button>
    <p class="text-center">
      Don't have an account? <router-link to="/auth/register">Sign up!</router-link>
    </p>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
