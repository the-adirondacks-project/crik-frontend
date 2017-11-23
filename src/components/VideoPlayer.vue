<template>
  <div>
    <video preload="metadata" muted="true" controls width="500" height="500">
      <source :src="$route.params.fileUrl">
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
};
</script>

<style scoped>
</style>
