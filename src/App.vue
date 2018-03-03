<template>
  <div id="app" class="full-height">
    <nav-pane :tabs="tabs" :selected.sync="selected" v-on:select="handleSelect">
      <router-view>
      </router-view>
    </nav-pane>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';

import NavPane from './components/NavPane';

export default {
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
  name: 'app',
  data() {
    return {
      tabs: [
        { name: 'Videos', route: 'Videos' },
        { name: 'Libraries', route: 'Libraries' },
      ],
      selected: '',
    };
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0px;
  background-color: #151515;
  color: #DDDDDD;
}

.full-height {
  height: 100%;
}

a {
  color: #DEDEDE;
}

a:visited {
  color: #A6A6A6;
}
</style>
