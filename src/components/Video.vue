<template>
  <div id="videoFiles">
    <div v-if="loading">
      Loading...
    </div>

    <div v-if="error">
      Error: {{ error }}
    </div>

    <div v-for="file in files">
      <router-link :to="makeVideoPlayerUrl(file.url)">{{ file.url }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import 'babel-polyfill';

import axios from 'axios';

export default {
  name: 'Video',
  data() {
    return {
      loading: true,
      error: null,
      files: null,
    };
  },
  created() {
    this.fetchVideo();
  },
  watch: {
    $route: 'fetchVideo',
  },
  methods: {
    makeVideoPlayerUrl(fileUrl: string) {
      return `/video-player/${encodeURIComponent(fileUrl)}`;
    },
    async fetchVideo() {
      try {
        const videoResponse = await axios.get(`/api/videos/${this.$route.params.videoId}/files`);
        this.files = videoResponse.data;
        this.loading = false;
      } catch (error) {
        this.error = error.statusText;
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
#videoFiles {
  text-align: center;
}
</style>
