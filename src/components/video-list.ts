import 'babel-polyfill';

import axios from 'axios';
import Vue from 'vue';

import template from './video-list-component.html';

import { AddButton } from './add-button';
import { TopBar } from './top-bar';

export const VideoList = Vue.component('video-list', {
  name: 'VideoList',
  template,
  data() {
    return {
      loading: true,
      error: null,
      videos: null,
      newVideo: null,
      addVideo: false,
    };
  },
  created() {
    this.fetchVideos();
  },
  components: {
    AddButton,
    TopBar,
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    async createVideo() {
      this.addVideo = false;

      const newVideo = {
        name: this.newVideo,
        id: '',
      };

      this.videos.push(newVideo);
      const videoResponse = await axios.post('api/videos', newVideo);
      newVideo.id = videoResponse.data.id;
    },

    makeVideoUrl(videoId: string) {
      return `/video/${videoId}`;
    },

    showNewVideo() {
      this.addVideo = true;
      this.$nextTick(() => this.$refs.addVideoInput.focus());
    },

    async fetchVideos() {
      try {
        const videoResponse = await axios.get('/api/videos');
        this.videos = videoResponse.data;
        this.loading = false;
      } catch (error) {
        this.error = error.statusText;
        this.loading = false;
      }
    },
  },
});
