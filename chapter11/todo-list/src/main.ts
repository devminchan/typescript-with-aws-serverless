import Vue from 'vue';
import App from './App.vue';
import '@/plugins/AxiosPlugin';
import '@/plugins/LodashPlugin';
import 'babel-polyfill';

import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app');
