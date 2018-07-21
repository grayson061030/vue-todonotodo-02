<template>
  <div>
    <div id="ideasWraper">
      <idea v-for="idea in ideas" :idea="idea"></idea>
    </div>
    <div class="text-center" id="ideasLoading">
      <i class="fa fa-spin fa-spinner"></i>
    </div>
  </div>
</template>

<script>
  import Idea from './Idea';
    export default {
      name: "IdeaList",
      components: {
        idea: Idea,
      },
      created: function () {
        this.ideas = [];
        this.getIdeas();
      },
      data: function () {
        return {
          ideas: []
        }
      },
      methods: {
          getIdeas: function () {
            this.$http.get('/ideas')
              .then(function (res) {
                this.ideas = res.body;
              })
          }
      }
    }
</script>

<style scoped>
  #ideasWraper {
    margin: 0 -20px;
  }

  #ideasLoading {
    padding: 40px;
  }

  #ideasLoading i {
    font-size: 40px;
  }
</style>
