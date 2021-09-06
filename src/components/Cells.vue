<template>
  <div class="columns is-variable is-1 is-multiline is-centered is-mobile is-relative">
    <div
      v-if="winner || tied"
      class="
        overlay
        column
        is-12
        is-flex
        is-flex-direction-column
        is-align-items-center
        is-justify-content-center
      "
    >
      <h1 v-if="winner" class="title is-size-1 has-text-dark-grey mb-2">
        Player {{ player }} won!
      </h1>
      <h1 v-if="tied" class="title is-size-1 has-text-dark-grey mb-2">
        Tied!
      </h1>
      <button class="button is-info overlay-button" @click="newGame">New Game</button>
    </div>
    <div
      v-for="(cell, index) in cells"
      :key="index"
      class="column is-4"
    >
      <button
        class="button button-cells is-size-1 has-text-weight-bold"
        :class="[
          cell === 'X' && 'is-primary',
          cell === 'O' && 'is-danger',
          !cell && 'is-info'
        ]"
        :value="index"
        @click="move"
      >
        {{ cell }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cells',
  computed: {
    cells() {
      return this.$store.state.cells;
    },
    winner() {
      return this.$store.state.winner;
    },
    tied() {
      return this.$store.state.tied;
    },
    player() {
      return this.$store.state.player;
    }
  },
  methods: {
    move(event) {
      if (event.target.value) {
        this.$store.dispatch('move', event.target.value);
      }
    },
    newGame(){
      this.$store.dispatch('newGame');
    }
  }
};
</script>

<style scoped>
/* override multiline gap per row */
.column {
  padding: var(--columnGap);
  /* width: 20vh !important;
  height: 20vh !important; */

}

.columns {
  height: 60vh;
}

.button-cells {
  width: 100%;
  min-height: 100%;
}
.overlay {
  background-color: rgba(255, 255, 255, 0.521);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 61vh;
}
</style>