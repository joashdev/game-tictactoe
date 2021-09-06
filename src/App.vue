<template>
  <div class="columns is-centered m-0 p-0">
    <div class="column is-two-fifths-desktop is-centered">
      <Dashboard />
      <Cells />
    </div>
  </div>
</template>

<script>
import Cells from './components/Cells';
import Dashboard from './components/Dashboard';
export default {
  name: 'App',
  components: {
    Cells, Dashboard
  }
};
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css';
#app {
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
