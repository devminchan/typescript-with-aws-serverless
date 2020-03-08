import Vue from 'vue';
import Vuetify, { UserVuetifyPreset } from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import { colors } from 'vuetify/lib';

const opts = {
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.green.base,
      },
      dark: {
        primary: colors.blue.lighten1,
      },
    },
  },
} as Partial<UserVuetifyPreset>;

Vue.use(Vuetify);

export default new Vuetify(opts);