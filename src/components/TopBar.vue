<template>
  <div class="main-header">
    <div class="main-header-menu">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>

<style scoped>
.main-header {
  height: 40px;
  background-color: #222222
}

.main-header-menu {
  float: right;
  margin-right: 5px;
  top: 50%;
  transform: translateY(-50%);
  position: relative;
}
</style>
