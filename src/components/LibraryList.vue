<template>
  <div>
    <top-bar>
      <add-button v-on:click.native="handleNewLibrary"></add-button>
    </top-bar>
    <div style="padding: 10px;">
      <table style="width: 100%">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              URL
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="library in libraries">
            <td>
              name tbd
            </td>
            <td>
              {{ library.url }}
            </td>
          </tr>
          <tr v-if="showNewLibrary">
            <td>
              name tbd
            </td>
            <td>
              <input
                ref="addLibraryInput"
                v-model="newLibrary"
                v-on:keyup.enter="createLibrary"
                v-on:blur="createLibrary">
              </input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import AddButton from './AddButton';
import TopBar from './TopBar';

export default {
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
    fetchLibraries() {
      Vue.http.get('/api/video_libraries').then((response) => {
        this.libraries = response.body;
        this.loading = false;
      }, (response) => {
        this.error = response.statusText;
        this.loading = false;
      });
    },

    createLibrary() {
      this.showNewLibrary = false;

      const newLibrary = {
        url: this.newLibrary,
      };

      this.libraries.push(newLibrary);
      Vue.http.post('api/video_libraries', newLibrary).then((response) => {
        newLibrary.id = response.data.id;
      });
    },

    handleNewLibrary() {
      this.showNewLibrary = true;
      this.$nextTick(() => this.$refs.addLibraryInput.focus());
    },
  },
  name: 'LibraryList',
  watch: {
    $route: 'fetchLibraries',
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

th {
  text-align: left;
}

td, th {
  padding: 0;
}

table tr:nth-child(odd) td{
  background-color: #252525;
}

table tr:nth-child(even) td{
  background-color: #353535;
}
</style>
