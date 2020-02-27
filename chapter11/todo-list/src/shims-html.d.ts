import Component from 'vue-class-component';

declare module '*.html' {
  import Vue, { ComponentOptions, FunctionalComponentOptions } from 'vue';

  interface WithRender {
    <V extends Vue, U extends ComponentOptions<V> | FunctionalComponentOptions>(
      options: U,
    ): U;
    <V extends typeof Vue>(component: V): V;
  }

  export default WithRender;
}