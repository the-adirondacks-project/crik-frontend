<template>
  <div id="videoList">
    <main-header>
      <button class="add-button">+</button>
    </main-header>

    <div v-if="loading">
      Loading...
    </div>

    <div v-if="error">
      Error: {{ error }}
    </div>

    <div v-for="video in videos">
      <router-link :to="makeVideoUrl(video.id)">{{ video.name }}</router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import MainHeader from './MainHeader';

export default {
  name: 'VideoList',
  data() {
    return {
      loading: true,
      error: null,
      videos: null,
    };
  },
  created() {
    this.fetchVideos();
  },
  components: {
    MainHeader,
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    makeVideoUrl(videoId) {
      return `/video/${videoId}`;
    },

    fetchVideos() {
      Vue.http.get('/api/videos').then((response) => {
        this.videos = response.body;
        this.loading = false;
      }, (response) => {
        this.error = response.statusText;
        this.loading = false;
      });
    },
  },
};
</script>

<style scoped>
#videoList {
  text-align: center;
}

.add-button {
  width: 20px;
  height: 20px;
  padding: 0px;
  margin: 0px;
  border: 2px solid;
  background-color: #151515;
  color: #DEDEDE;
}

.add-button:hover {
  color: #A6A6A6;
}

.add-button::-moz-focus-inner {
  border-style: none;
}
</style>
