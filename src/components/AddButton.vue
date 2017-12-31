<template>
  <button class="add-button">+</button>
</template>

<script>
export default {
  name: 'AddButton',
};
</script>

<style>
.add-button {
  width: 20px;
  height: 20px;
  padding: 0px;
  margin: 0px;
  border: 2px solid;
  background-color: #151515;
  color: #DEDEDE;
}

.add-button:hover {
  color: #A6A6A6;
}

.add-button::-moz-focus-inner {
  border-style: none;
}
</style>
