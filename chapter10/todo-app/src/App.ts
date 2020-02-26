import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './App.html';
import './App.scss';

// import Props1 from '@/components/Props1.vue';
// import Props2 from '@/components/Props2.vue';
// import Methods from '@/components/Methods.vue';
// import Watch from '@/components/Watch.vue';
import CallEmit from '@/components/CallEmit.vue';
import CallMethod from '@/components/CallMethod.vue';

@WithRender
@Component({
  components: {
    CallEmit,
    CallMethod,
  }
})
export default class App extends Vue {
  public name: string = 'no call';

  public callMe(value: string): void {
    this.name = value;
  }
}