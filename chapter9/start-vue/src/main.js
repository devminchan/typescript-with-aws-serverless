import Vue from 'vue'
import App from './App.vue'

// import Item from './components/Item.vue'

Vue.config.productionTip = false
// Vue.component("Item", Item);

new Vue({
  render: h => h(App),
}).$mount('#app')
