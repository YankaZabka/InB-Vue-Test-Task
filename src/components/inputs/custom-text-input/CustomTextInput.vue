<template>
  <div class="form-group"
       :class="{ 'focused': isFocused }"
  >
    <label v-if="label" :style="{ color: isDisabled ? '#9C9C9C' : 'inherit'}">{{ label }}</label>
    <input
        @focus="isFocused = true"
        @blur="isFocused = false"
        :disabled="isDisabled"
        type="text"
        v-model="inputValue"
        :placeholder="placeholder"
    />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    }
  },
  data() {
    return {
      inputValue: '',
      isFocused: false,
    };
  },
}
</script>
<style scoped>
.form-group{
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  border:1px solid #E9E9E9;
  border-radius: 4px;

  padding:18px 18px 18px 20px;
  margin-top:10px;
  margin-bottom: 0;
}

.form-group>label{
  position:absolute;
  top:-1px;
  left:24px;
  background-color:white;
  padding: 0 4px;
}

.form-group>input{
  width: 100%;
  border:none;
  outline: none;
}

.form-group>input::placeholder{
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
}

.form-group>input:disabled {
  background-color:white;
  color: #9C9C9C;
}

.focused {
  border-color: #2B0A57;
}
</style>