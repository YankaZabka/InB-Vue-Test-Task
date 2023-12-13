<template>
    <div class="d-flex justify-content-center align-items-center" style="gap: 12px">

        <!-- LABELS -->
        <div class="d-flex justify-content-center align-items-center flex-column">
          <label class="label-text">{{ label }}</label>
          <label class="label-text" v-show="isInputFocused && additionalLabel && !isOutOfRange">{{ additionalLabel }}</label>
          <span v-show="isOutOfRange" class="label-text" style="color: #EB5757">Out of range</span>
        </div>

        <input :class="{ 'border-red': isOutOfRange }" class="input-element" v-model="inputValue" @focus="onInputFocus" @blur="onInputBlur"/>

      <b-dropdown size="md"  variant="link" toggle-class="text-decoration-none" no-caret>
        <template #button-content>
          <img :src="DropdownToggleImage" alt="DropdownToggleImage"><span class="sr-only">Search</span>
        </template>
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here...</b-dropdown-item>
      </b-dropdown>
    </div>
</template>

<script>
import * as A from "@/assets"
export default {
  props: {
    label: String,
    additionalLabel: String,
    limits: Object
  },
  data() {
    return {
      inputValue: '',
      isInputFocused: false,
      DropdownToggleImage: A.DropdownToggle
    };
  },
  methods: {
    onInputFocus() {
      this.isInputFocused = true;
    },
    onInputBlur() {
      if (this.limits) {
        const value = parseInt(this.inputValue, 10);
        if (isNaN(value)) {
          this.inputValue = '';
        } else if (value < this.limits.min) {
          this.inputValue = this.limits.min;
        } else if (value > this.limits.max) {
          this.inputValue = this.limits.max;
        }
      }

      this.isInputFocused = false;
    }
  },
  computed: {
    isOutOfRange() {
      if (!this.limits) return false;

      const value = parseInt(this.inputValue, 10);
      return isNaN(value) || value < this.limits.min || value > this.limits.max;
    }
  },
}
</script>

<style scoped>
.input-element {
  color: #FDFDFD;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid #DEDEDE;

  width: 60px;
}

.input-element:focus {
  background-color: transparent;
  border: none;
  outline: none;

  border-bottom: 1px solid #DEDEDE;
}

.label-text {
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;

  margin-bottom: 0;
}

.border-red {
  border-bottom: 1px solid #EB5757;
}
</style>