import 'babel-polyfill';

import axios from 'axios';
import Vue from 'vue';

import template from './library-list.html';

import { AddButton } from './add-button';
import { TopBar } from './top-bar';

export const LibraryList = Vue.component('library-list', {
  name: 'LibraryList',
  template,
  created() {
    this.fetchLibraries();
  },
  data() {
    return {
      libraries: null,
      newLibrary: null,
      showNewLibrary: false,
    };
  },
  components: {
    AddButton,
    TopBar,
  },
  methods: {
    async fetchLibraries() {
      try {
        const libraryResponse = await axios.get('/api/video_libraries');
        this.libraries = libraryResponse.data;
        this.loading = false;
      } catch (error) {
        this.error = error.statusText;
        this.loading = false;
      }
    },

    async createLibrary() {
      this.showNewLibrary = false;

      const newLibrary = {
        url: this.newLibrary,
        id: '',
      };

      this.libraries.push(newLibrary);
      const libraryResponse = await axios.post('api/video_libraries', newLibrary);
      newLibrary.id = libraryResponse.data.id;
    },

    handleNewLibrary() {
      this.showNewLibrary = true;
      this.$nextTick(() => this.$refs.addLibraryInput.focus());
    },
  },
  watch: {
    $route: 'fetchLibraries',
  },
});
