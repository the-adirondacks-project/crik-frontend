import * as _ from 'lodash';
import Vue from 'vue';

import template from './app.html';

import { NavPane } from './components/nav-pane';

export const App = Vue.component('app', {
  name: 'App',
  template,
  components: {
    NavPane,
  },
  created() {
    this.selected = _.find(this.tabs, tab => tab.route === this.$route.name);
  },
  methods: {
    handleSelect(tab: any) {
      this.$router.push({ name: tab.route });
    },
  },
  data() {
    return {
      tabs: [
        { name: 'Videos', route: 'Videos' },
        { name: 'Libraries', route: 'Libraries' },
      ],
      selected: '',
    };
  },
});
