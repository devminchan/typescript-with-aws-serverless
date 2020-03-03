<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <TitleLabel :title.sync="title"/>
    <TodoList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from './components/TodoList';
import TitleLabel from './components/TitleLabel';

@Component({
  components: {
    TodoList,
    TitleLabel,
  },
})
export default class App extends Vue { 
  private title: String = ""
}
</script>

<style lang="scss">
</style>
