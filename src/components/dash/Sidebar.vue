<template>
  <div id="sidebar" class="text-center">
      <h4 class="text-center">@{{user.username}}</h4>
      <hr>
      <div class="row">
        <div class="col-sm-6">
          <a href="#" class="btn btn-block btn-default"><i class="fa fa-user"></i> Profile</a>
        </div>
        <div class="col-sm-6">
          <a href="#" class="btn btn-block btn-default"><i class="fa fa-newspaper-o"></i> Ideas</a>
        </div>
      </div>
      <div class="form-group row">
        <div class="m-t-20 m-b-20">
          <input class="form-control" type="text" placeholder="Idea's Title" v-model="newIdea.title">
        </div>
      </div>
      <div class="ideaNowWrap m-t-20 m-b-20">
      <textarea rows="10" class="form-control" placeholder="Start writing your idea here!" maxlength="400"
        v-model="newIdea.description"></textarea>
        <p class="text-muted">{{400 - newIdea.description.length}} character{{400 - newIdea.description.length == 1 ? '' : 's'}} remaining</p>
        <p class="text-center no-margin"><button class="btn btn-primary">Publish Now!</button></p>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <p class="text-center no-margin">
            <a href="#"><i class="fa fa-cog"></i> Settings</a>
          </p>
        </div>
        <div class="col-sm-6">
          <p class="text-center no-margin">
            <a href="#" @click.prevent="logout"><i class="fa fa-power-off"></i> Logout</a>
          </p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    created: function() {
      this.getUser();
    },
    data: function () {
      return {
        user: {},
        newIdea: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      getUser: function () {
        this.$http.get('/users/me')
          .then(function (res) {
            this.user = res.body;
          })
      },
      logout: function() {
        this.$auth.destroyToken();
        this.user = {};
        this.$router.push('/auth/login');
      }
    }
  }
</script>

<style scoped>
  #sidebar {
    background: #fff;
    padding: 20px;
    border-radius: 6px;
  }

  .ideaNowWrap {
    background: #f0f0f0;
    margin: 20px -20px;
    padding: 20px;
  }

  .ideaNowWrap textarea {
    background: transparent;
    border: transparent;
    box-shadow: none;
    resize: vertical;
  }
</style>
