<template>
  <div class="container m-3 mb-5">
    <p class="title is-size-1 has-text-centered mt-3 mb-0">TicTacToe</p>
    <p class="title is-size-6 has-text-centered mt-0">by joashdev</p>
    <div class="columns is-variable is-3 is-mobile">
      <div class="column is-6 pl-3">
        <p class="title is-5 m-2">Player X: &nbsp;{{ score.X }}</p>
        <p class="title is-5 m-2 mt-4">Player O: &nbsp;{{ score.O }}</p>
      </div>
      <div class="column is-6 mr-0">
        <a class="button is-info is-small m-1 mr-2 is-pulled-right" @click="newGame">NEW GAME</a>
        <a class="button is-info is-outlined is-small m-1 mr-2 is-pulled-right" @click="resetScore">Reset Score</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    score() {
      return this.$store.state.score;
    }
  },
  methods: {
    newGame() {
      this.$store.dispatch('newGame');
    },
    resetScore() {
      this.$store.dispatch('resetScore');
    }
  },
};
</script>
<style scoped>
a{
  width: 75%;
}
</style>