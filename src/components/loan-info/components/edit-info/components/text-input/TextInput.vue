<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="gap: 12px"
  >
    <!-- LABELS -->
    <div class="d-flex justify-content-center align-items-center flex-column">
      <label class="label-text">{{ label }}</label>
      <label
        class="label-text"
        v-show="isInputFocused && additionalLabel && !isOutOfRange"
        >{{ additionalLabel }}</label
      >
      <span
        v-show="isInputChanged && isOutOfRange && additionalLabel"
        class="label-text"
        style="color: #eb5757"
        >Out of range</span
      >
    </div>

    <input
      :class="{ 'border-red': isOutOfRange && isInputChanged }"
      class="input-element"
      v-model="editedInputValue"
      @focus="onInputFocus"
      @blur="onInputBlur"
      @input="onInputChange"
      :placeholder="placeholder"
    />

    <b-dropdown
      size="md"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
    >
      <template #button-content>
        <img :src="DropdownToggleImage" alt="DropdownToggleImage" /><span
          class="sr-only"
          >Search</span
        >
      </template>
      <b-dropdown-item
        v-for="option in dropdownOptions"
        :key="option"
        @click="setInputValue(option)"
      >
        {{ option }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import * as A from "@/assets";
export default {
  props: {
    placeholder: String,
    inputValue: String,
    label: String,
    additionalLabel: String,
    limits: Object,
  },
  data() {
    return {
      editedInputValue: this.inputValue,
      isInputFocused: false,
      isInputChanged: false,

      dropdownOptions: [],
      DropdownToggleImage: A.DropdownToggle,
    };
  },
  methods: {
    onInputChange() {
      this.$emit("updateInputValue", String(this.editedInputValue));

      if (!this.isInputChanged) {
        this.isInputChanged = true;
      }
    },
    onInputFocus() {
      this.isInputFocused = true;
    },
    onInputBlur() {
      if (this.limits) {
        const value = parseInt(this.editedInputValue, 10);
        if (isNaN(value)) {
          this.editedInputValue = this.limits.min;
        } else if (value < this.limits.min) {
          this.editedInputValue = this.limits.min;
        } else if (value > this.limits.max) {
          this.editedInputValue = this.limits.max;
        } else this.editedInputValue = value;
      }

      this.$emit("updateInputValue", String(this.editedInputValue));
      this.generateDropdownOptions();
      this.isInputFocused = false;
    },
    generateDropdownOptions() {
      if (!this.limits) {
        this.dropdownOptions = [];
        return;
      }

      const currentVal = parseInt(this.editedInputValue, 10) || this.limits.min;
      const optionDiffer = this.limits.min >= 100 ? 100 : 1;

      if (currentVal - 4 * optionDiffer < this.limits.min) {
        this.dropdownOptions = new Array(4)
          .fill(undefined)
          .map((_, i) => this.limits.min + i * optionDiffer);
        return;
      }
      if (currentVal + 4 * optionDiffer > this.limits.max) {
        this.dropdownOptions = new Array(4)
          .fill(undefined)
          .map((_, i) => this.limits.max - i * optionDiffer);
        return;
      }
      this.dropdownOptions = [
        currentVal - (optionDiffer * 3),
        currentVal - (optionDiffer * 2),
        currentVal - (optionDiffer * 1),
        currentVal,
      ];
    },

    setInputValue(value) {
      this.editedInputValue = value;
      this.$emit("updateInputValue", String(this.editedInputValue));
    },
  },
  computed: {
    isOutOfRange() {
      if (!this.limits) return false;

      const value = parseInt(this.editedInputValue, 10);
      return isNaN(value) || value < this.limits.min || value > this.limits.max;
    },
  },
  mounted() {
    this.generateDropdownOptions();
  },
};
</script>

<style scoped>
.input-element {
  color: #fdfdfd;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid #dedede;

  width: 60px;
}

.input-element:focus {
  background-color: transparent;
  border: none;
  outline: none;

  border-bottom: 1px solid #dedede;
}

.label-text {
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;

  margin-bottom: 0;
}

.border-red {
  border-color: #eb5757 !important;
}
</style>
