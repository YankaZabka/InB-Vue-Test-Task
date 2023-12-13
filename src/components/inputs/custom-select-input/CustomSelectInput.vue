<template>
  <div class="form-group" :class="{ focused: isFocused }">
    <label
      v-if="label"
      :style="{ color: isDisabled ? '#9C9C9C' : 'inherit' }"
      >{{ label }}</label
    >
    <select
      @focus="isFocused = true"
      @blur="isFocused = false"
      :disabled="isDisabled"
      type="text"
      v-model="selectedValue"
    >
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Placeholder",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedValue: this.options[0],
      isFocused: false,
    };
  },
};
</script>
<style scoped>
.form-group {
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  border: 1px solid #e9e9e9;
  border-radius: 4px;

  padding: 18px 18px 18px 20px;
  margin-top: 10px;
  margin-bottom: 0;
}

.form-group > label {
  position: absolute;
  top: -1px;
  left: 24px;
  background-color: white;
  padding: 0 4px;
}

.form-group > select {
  width: 100%;
  border: none;
  outline: none;
  background-color: white;
}

.form-group > select::placeholder {
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
}

.form-group > select:disabled {
  background-color: white;
  color: #9c9c9c;
}

.focused {
  border-color: #2b0a57;
}
</style>
