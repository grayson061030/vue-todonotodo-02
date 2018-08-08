<template>
  <div class="idea">
    <div class="row">
      <div class="col-xs-2 text-center">
        <router-link :to="'/users/'+idea.user._id">
          <img :src="idea.user.avatar" class="img-circle no-margin">
        </router-link>
      </div>
      <div class="col-xs-12">
        <router-link :to="''" v-show="">{{idea.user.username}}</router-link>
        <h4><strong class="text-muted">{{idea.title}}<br><br></strong></h4>
        <p class="description">{{idea.description}}</p>
      </div>
    </div>
    <div class="ideaFooter">
      <button class="btn" @click="">
        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
        {{idea.vote_up.length}}
      </button>
      <button class="btn" @click="">
        <i class="fa fa-thumbs-down" aria-hidden="true"></i>
        {{idea.vote_down.length}}
      </button>
      <button class="btn" @click="">
        <i class="fa fa-comments" aria-hidden="true"></i>
        {{idea.comments.length}}
      </button>
      <button class="btn" @click="shareFacebook">
        <i class="fa fa-facebook-square" aria-hidden="true"><strong> share</strong></i>
      </button>
      <button class="btn" @click="showModal = true">
        <i class="glyphicon glyphicon-pencil" aria-hidden="true"></i>add
      </button>
      <strong class="pull-right">
        <i class="fa fa-calendar"></i> {{ideaDate(idea.created)}}
        <i class="fa fa-clock-o"></i> {{ideaTime(idea.created)}}
      </strong>
    </div>
    <div id="commentsWraper">
    <comment></comment>
    </div>
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" @click="showModal=false">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title" id="exampleModalLabel">New Comment</h4>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="message-text" class="control-label">Contents:</label>
                      <textarea class="form-control" id="message-text" placeholder="write here ..."
                                v-model="newComment.description"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" @click="showModal = false">Close</button>
                  <button type="button" class="btn btn-primary" @click="addComment">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  import Comment from './Comments';
  export default {
    name: "IdeaDetail",
    components: {
      comment: Comment,
    },
    created: function(){
      this.getIdea();
    },
    data: function() {
      return {
        idea: {
          comments: [],
          created: '',
          description:'',
          status: 0,
          title: '',
          user:{},
          vote_down:[],
          vote_up:[],
          _id:''
        },
        showModal: false,
        newComment: {}
      }
    },
    watch: {
      $route: 'getIdea'
    },
    methods: {
      getIdea: function () {
        this.$http.get('/ideas/'+this.$route.params.idea_id)
          .then(function (res) {
            this.idea = res.body;
          })
      },
      shareFacebook: function(){
        //TODO: 페이스북 타임라인 공유
        alertify.success('Shared to your facebook timeline!')
      },
      addComment: function(){
        this.showModal = false;
        if(this.newComment.description.length > 0){
          this.newComment.idea = this.idea._id;
          this.$http.post('/comments',this.newComment)
            .then(function (res) {
              // this.$root.$on('newComment',res.body);
              alertify.success('added your comment!');
            });
          this.initNewComment();
        }
      },
      initNewComment: function(){
        this.newComment.idea = '';
        this.newComment.description = '';
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
  #commentsWraper {
    margin: 0 -10px;
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

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
</style>
