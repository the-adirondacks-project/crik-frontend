<template>
  <div>
    <video id="video" preload="metadata" controls>
      <source :src="$route.params.fileUrl">
    </video>
  </div>
</template>

<script lang="ts">
export default {
  name: 'VideoPlayer',
};
</script>

<style scoped>
  #video {
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>
