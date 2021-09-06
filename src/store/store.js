import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cells: Array(9).fill(null),
    // cells: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
    winner: false,
    tied: false,
    player: 'X',
    score: {
      X: 0,
      O: 0
    }
  },
  mutations: {
    move(state, ind) {
      if (!state.cells[ind] && !state.winner && !state.tied) {
        Vue.set(state.cells, ind, state.player);
      }
    },
    newGame(state) {
      state.cells = Array(9).fill(null);
      state.winner = false;
      state.tied = false;
    },
    resetScore(state) {
      state.score.X = 0;
      state.score.O = 0;
    }
  },
  actions: {
    move({ commit, state }, ind) {
      commit('move', ind);
      const combos = [
        // horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // diagonal
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (const [a, b, c] of combos) {
        if (
          state.cells[a] &&
          state.cells[a] === state.cells[b] &&
          state.cells[a] === state.cells[c]
        ) {
          state.winner = true;
          state.tied = false;
        }
      }
      state.tied = !state.winner && !state.cells.includes(null);
      console.log(!state.winner && !state.cells.includes(null));
      if (!state.winner) {
        state.player = state.player === 'X' ? 'O' : 'X';
      } else {
        state.score[state.player]++;
      }
    },
    newGame({ commit }) {
      commit('newGame');
    },
    resetScore({ commit, state }) {
      commit('resetScore');
      if (state.winner) {
        state.winner = false;
        commit('newGame');
      } else {
        state.winner = false;
      }
    }
  }
});

// TODO: Create action and handle it in component level
