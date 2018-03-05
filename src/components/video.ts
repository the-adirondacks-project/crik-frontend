import 'babel-polyfill';

import axios from 'axios';
import Vue from 'vue';

import template from './video.html';

export const Video = Vue.component('video', {
  name: 'Video',
  template,
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
});
