<template>
  <div id="app" class="full-height">
    <div class="left-bar">
      <div class="left-button">
        Videos
      </div>
      <div class="left-button">
        Libraries
      </div>
    </div>
    <div class="content-pane">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0px;
  background-color: #151515;
  color: #DDDDDD;
}

.full-height {
  height: 100%;
}

.left-bar {
  background-color: #222222;
  float: left;
  height: 100%;
  width: 100px;
}

.left-button {
  padding-left: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
}

.left-button:hover {
  background-color: #404040;
}

.content-pane {
  margin-left: 100px;
}

a {
  color: #DEDEDE;
}

a:visited {
  color: #A6A6A6;
}
</style>
