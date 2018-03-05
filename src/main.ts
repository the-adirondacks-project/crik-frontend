import Vue from 'vue';
import { App } from './app';
import router from './router';

import './styles.scss';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { App },
});
