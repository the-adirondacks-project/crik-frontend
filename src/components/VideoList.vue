<template>
  <div id="videoList">
    <top-bar>
      <add-button v-on:click.native="showNewVideo"></add-button>
    </top-bar>

    <div v-if="loading">
      Loading...
    </div>

    <div v-if="error">
      Error: {{ error }}
    </div>

    <div v-for="video in videos">
      <router-link :to="makeVideoUrl(video.id)">{{ video.name }}</router-link>
    </div>

    <input
      v-if="this.addVideo"
      ref="addVideoInput"
      v-model="newVideo"
      v-on:keyup.enter="createVideo"
      v-on:blur="createVideo">
    </input>
  </div>
</template>

<script lang="ts">
import 'babel-polyfill';

import axios from 'axios';

import AddButton from './AddButton';
import TopBar from './TopBar';

export default {
  name: 'VideoList',
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
};
</script>

<style scoped>
#videoList {
  text-align: center;
}
</style>
