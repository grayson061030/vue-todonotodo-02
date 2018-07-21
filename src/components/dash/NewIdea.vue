<template>
  <div id="newidea">
    <h2 class="m-t-o m-b-20">Latest Ideas</h2>
    <idea-list></idea-list>
  </div>
</template>

<script>
  import IdeaList from './IdeaList';
    export default {
      name: "NewIdea",
      components: {
          ideaList: IdeaList,
      },

    }
</script>

<style scoped>

</style>
