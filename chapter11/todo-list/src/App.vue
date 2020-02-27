<template>
  <div id="app">
    <TodoList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from './components/TodoList';

@Component({
  components: {
    TodoList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
