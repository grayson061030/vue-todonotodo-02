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
        <strong class="text-muted">{{idea.title}}<br><br></strong>
          <p class="description">
            {{idea.description}}
          </p>
      </div>
    </div>
    <div class="ideaFooter">
      <button class="btn" @click="likeIdea">
        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
        {{idea.meta.up}}
      </button>
      <button class="btn" @click="likeIdea">
        <i class="fa fa-thumbs-down" aria-hidden="true"></i>
        {{idea.meta.down}}
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
      likeIdea: function () {

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

