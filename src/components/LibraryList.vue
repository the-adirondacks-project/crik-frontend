<template>
  <div style="margin: 10px;">
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
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  created() {
    this.fetchLibraries();
  },
  data() {
    return {
      libraries: null,
    };
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
