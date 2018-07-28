<template>
  <div id="dashWrap">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-md-offset-1 col-sm-5">
          <sidebar></sidebar>
        </div>
        <div class="col-md-7 col-sm-7 mainView">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar';

    export default {
      name: "Dash",
      components: {
          sidebar: Sidebar
      },
      created: function () {
        if(this.$auth.loggedIn()){
          this.$http.get('/users/me')
            .then(function (res) {
              this.$store.commit('setCurrentUser',res.body);
            }).catch(function (res) {
              this.$store.commit('clearCurrentUser');
          });
        }else{
          this.$store.commit('clearCurrentUser');
        }
      }
    }
</script>

<style scoped>
  #dashWrap {
    min-height: 100%;
    padding-top: 50px;
    background: #81d4ff;
    background: -webkit-linear-gradient(to bottom, #81d4ff, #edc5ed);
    background: linear-gradient(to bottom, #81d4ff, #edc5ed);
  }
  .mainView {
    background: #fff;
    border-radius: 6px;
    padding: 20px;
  }
</style>
