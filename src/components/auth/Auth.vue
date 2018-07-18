<template>
  <div id="auth">
    <div class="container">
      <div class="col-md-4 col-md-offset-4 authForm">
        <h2 class="text-center">Todonotodo</h2>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Auth"
    }
</script>

<style scoped>
  #auth {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .authForm {
    background: #fff;
    padding-bottom: 15px;
    padding-top: 10px;
    border-radius: 10px;
  }
</style>
