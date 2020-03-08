import Vue from 'vue';
import Vuetify, { UserVuetifyPreset } from 'vuetify';

import 'vuetify/dist/vuetify.min.css';

const opts = {
  icons: {
    iconfont: 'mdi',
  },
} as Partial<UserVuetifyPreset>;

Vue.use(Vuetify);

export default new Vuetify(opts);