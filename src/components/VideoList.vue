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

<script>
import Vue from 'vue';

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
    createVideo() {
      this.addVideo = false;

      const newVideo = {
        name: this.newVideo,
      };

      this.videos.push(newVideo);
      Vue.http.post('api/videos', newVideo).then((response) => {
        newVideo.id = response.data.id;
      });
    },

    makeVideoUrl(videoId) {
      return `/video/${videoId}`;
    },

    showNewVideo() {
      this.addVideo = true;
      this.$nextTick(() => this.$refs.addVideoInput.focus());
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
