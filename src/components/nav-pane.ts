import Vue from 'vue';

import template from './nav-pane.html';

export const NavPane = Vue.component('nav-pane', {
  name: 'navPane',
  template,
  methods: {
    handleClick(tab: any) {
      if (this.selected !== tab) {
        this.$emit('update:selected', tab);
        this.$emit('select', tab);
      }
    },
  },
  props: ['tabs', 'selected'],
});
