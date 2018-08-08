<template>
    <div class="comment">
      <div class="panel panel-default" v-for="comment in comments">
        <div class="panel-body">
          {{comment.description}}
        </div>
        <button class="btn">
          <i class="fa fa-user"></i>
           <strong>{{comment.user.username}}</strong>
        </button>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Comments",
    data: function () {
      return {
        comments: []
      }
    },
    created: function() {
      this.comments = [];
      this.getComments();
    },
    methods: {
      //FIXME: added paging process
      getComments: function () {
        this.$http.get('/comments/'+this.$route.params.idea_id)
          .then(function (res) {
            this.comments = res.body;
          });
      }
    }
  }
</script>

<style scoped>
  .comment {
    background: #f0f0f0;
    border-bottom: 1px solid #81d4ff;
    padding: 10px 0px 0px;
  }
  .pull-right {
    margin-right: 10px;
  }
</style>
