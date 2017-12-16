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

<script>
import Vue from 'vue';

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
    makeVideoPlayerUrl(fileUrl) {
      return `/video-player/${encodeURIComponent(fileUrl)}`;
    },
    fetchVideo() {
      Vue.http.get(`/api/videos/${this.$route.params.videoId}/files`).then((response) => {
        this.files = response.body;
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
#videoFiles {
  text-align: center;
}
</style>
