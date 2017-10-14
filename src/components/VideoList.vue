<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>

    <div v-if="error">
      Error: {{ error }}
    </div>

    <div v-for="video in videos">
      {{ video.name }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'EpisodeList',
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
</style>
