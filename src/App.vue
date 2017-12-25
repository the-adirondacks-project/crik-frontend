<template>
  <div id="app" class="full-height">
    <nav-pane :tabs="this.tabs" v-on:select="handleSelect">
      <router-view>
      </router-view>
    </nav-pane>
  </div>
</template>

<script>
import NavPane from './components/NavPane';

export default {
  components: {
    NavPane,
  },
  methods: {
    handleSelect(tab) {
      this.$router.push(tab.route);
    },
  },
  name: 'app',
  data() {
    return {
      tabs: [
        { name: 'Videos', route: '/' },
        { name: 'Libraries', route: '/libraries' },
      ],
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
