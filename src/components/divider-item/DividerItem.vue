<template>
  <fragment>
    <div class="divider-wrapper">
      <hr />
      <span v-if="text">{{ text }}</span>
      <hr />
    </div>
  </fragment>
</template>

<style scoped>
.divider-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  max-width: 568px;
}

hr {
  border: 0;
  flex-grow: 1;
  background-color: #e9e9e9;
  height: 1px;
}

span {
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #413c3c;
  background-color: white;
  padding: 0 100px;
}
</style>
<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>
