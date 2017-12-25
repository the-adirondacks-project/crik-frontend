<template>
  <div style="height: 100%">
    <div class="left-bar">
      <div
        class="left-button"
        v-bind:class="{ selected: tab === selected }"
        v-for="tab in tabs"
        v-on:click="handleClick(tab)">
        {{ tab.name }}
      </div>
    </div>
    <div class="content-pane">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(tab) {
      if (this.selected !== tab) {
        this.$emit('update:selected', tab);
        this.$emit('select', tab);
      }
    },
  },
  name: 'NavPane',
  props: ['tabs', 'selected'],
};
</script>

<style scoped>
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
  cursor: pointer;
}

.content-pane {
  margin-left: 100px;
}

.selected {
  background-color: #303030;
}
</style>
