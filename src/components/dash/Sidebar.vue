<template>
  <div id="sidebar" class="text-center">
    <div v-if="loggedIn">
      <h4 class="text-center">@{{user.username}}</h4>
      <hr>
      <div class="row">
        <div class="col-sm-6">
          <router-link :to="'/users/' + user._id" class="btn btn-block btn-default">
            <i class="fa fa-user"></i> Profile
          </router-link>
        </div>
        <div class="col-sm-6">
          <router-link to="/newidea" class="btn btn-block btn-default">
            <i class="fa fa-newspaper-o"></i> Feed
          </router-link>
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
        <p class="text-center no-margin">
          <button class="btn btn-primary" @click="publishIdea">Publish Now!</button>
        </p>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <p class="text-center no-margin">
            <router-link to="/settings"><i class="fa fa-cog"></i> Settings</router-link>
          </p>
        </div>
        <div class="col-sm-6">
          <p class="text-center no-margin">
            <a href="#" @click.prevent="logout"><i class="fa fa-power-off"></i> Logout</a>
          </p>
        </div>
      </div>
    </div>
    <div v-if="!loggedIn">
      <h3> 아이디어를 검증하세요</h3>
      <p>객관적으로 아이디어만 평가해봅시다. 당신이 누구든, 아이디어만으로 당신을 보겠습니다. 당신의 제품을 살지 안살지 솔직한 생각을 들어보세요.</p>
      <p class="text-center">
        <router-link to="/auth/register" class="btn btn-primary btn-block">Register</router-link>
        <router-link to="/auth/login" class="btn btn-default btn-block">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    created: function() {
    },
    data: function () {
      return {
        newIdea: {
          title: '',
          description: ''
        },
        loggedIn: this.$auth.loggedIn()
      }
    },
    computed: {
      user: function () {
        return this.$store.state.currentUser;
      }
    },
    methods: {
      publishIdea: function(){
        this.$http.post('/ideas',this.newIdea)
          .then(function (res) {
            this.$root.$emit('newIdea',res.body);
            this.initNewIdea();
            alertify.success('Idea published');
          })
      },
      logout: function() {
        this.$auth.destroyToken();
        this.user = {};
        this.$router.push('/auth/login');
      },
      initNewIdea: function () {
        this.newIdea = {
          title: '',
          description: ''
        }
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
