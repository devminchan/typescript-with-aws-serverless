import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './App.html';
import './App.scss';

// import Props1 from '@/components/Props1.vue';
// import Props2 from '@/components/Props2.vue';
// import Methods from '@/components/Methods.vue';
import Watch from '@/components/Watch.vue';

@WithRender
@Component({
  components: {
    Watch
  }
})
export default class App extends Vue {}