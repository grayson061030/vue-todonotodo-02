<template>
  <div id="profile">
    <div>
      <p class="text-center"><img :src="user.thumbnail" class="img-circle"></p>
      <h2 class="text-center">@{{user.username}}</h2>
      <hr>
      <p class="text-center m-b-20">user.about</p>
      <idea-list :endpoint="'/ideas/users/'+$route.params.user_id"></idea-list>
    </div>
  </div>
</template>

<script>
  //유저의 프로파일 정보와 유저가 작성한 글 목록을 보여준다
  import IdeaList from './IdeaList';

    export default {
        name: "Profile",
        components: {
        IdeaList: IdeaList,
      },
      created: function () {
        this.getUser();
      },
      data: function () {
        return {
          user: {}
        }
      },
      watch: {
        // call again the method if the route changes
        $route: 'getUser'
      },
      methods: {
        getUser: function () {
          this.$http.get('/users/' + this.$route.params.user_id)
            .then(function (res) {
              this.user = res.body;
            })
        }
      }
    }
</script>

<style scoped>
  #profile img {
    max-width: 200px;
  }
</style>
