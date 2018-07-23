<template>
  <div class="idea">
    <div class="row">
      <div class="col-xs-2 text-center">
        <router-link :to="'/profile/'+idea.user.username">
          <img :src="idea.user.thumbnail" class="img-circle no-margin">
        </router-link>
      </div>
      <div class="col-xs-12">
        <router-link :to="'/profile/'+idea.user.username">@{{idea.user.username}}</router-link>
        <h4><strong class="text-muted"><router-link :to="''">{{idea.title}}</router-link><br><br></strong></h4>
        <p class="description">
          {{idea.description}}
        </p>
      </div>
    </div>
    <div class="ideaFooter">
      <button class="btn" @click="likeIdea('UP')" :class="[idea.voted ? 'btn-primary' : 'btn-default']">
        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
        {{idea.vote_up.length}}
      </button>
      <button class="btn" @click="likeIdea('DOWN')">
        <i class="fa fa-thumbs-down" aria-hidden="true"></i>
        {{idea.vote_down.length}}
      </button>
      <button class="btn" @click="">
        <i class="fa fa-comments" aria-hidden="true"></i>
        {{idea.comments.length}}
      </button>
      <strong class="pull-right">
        <i class="fa fa-calendar"></i> {{ideaDate(idea.created)}}
        <i class="fa fa-clock-o"></i> {{ideaTime(idea.created)}}
      </strong>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  export default {
    name: "Idea",
    props: {
      idea:{}
    },
    methods: {
      likeIdea: function (vote) {
        this.$http.get('/ideas/vote/'+this.idea._id+'/'+vote)
          .then(function (res) {
            //fixme: 본인이 투표한 버튼에 대해 구분 하도록 한다.
            this.idea.vote_down = res.data.vote_down;
            this.idea.vote_up = res.data.vote_up;
            if(vote == 'UP'){
              this.idea.voted = true;
            }else{
              this.idea.voted = false;
            }
          })
      },
      ideaDate: function (timestamp) {
        return moment(timestamp).format('YYYY-MM-DD');
      },
      ideaTime: function (timestamp) {
        return moment(timestamp).format('HH:mm');
      }
    }
  }
</script>

<style scoped>
  .idea {
    background: #f0f0f0;
    border-bottom: 1px solid #81d4ff;
    padding: 40px 20px 0px;
  }

  .idea p {
    margin: 0;
  }

  .idea img {
    max-width: 100%;

  }

  .idea .row {
    display: flex;
    align-items: center;
  }

  .description{
    word-wrap: break-word;
  }

  .ideaFooter {
    margin: 40px -20px 0;
    background: #f8f8f8;
    color: #734b6d;
    padding: 10px 20px;
  }

  .ideaFooter .btn-default {
    color: #734b6d;
  }

  .ideaFooter .btn-primary {
    background: #734b6d;
  }

  .ideaFooter strong {
    margin-top: 7px;
  }
</style>

