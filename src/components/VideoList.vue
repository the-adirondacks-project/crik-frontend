<template>
  <div id="videoList">
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
</style>
