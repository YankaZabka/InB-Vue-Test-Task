<template>
  <div
    class="d-flex justify-content-between align-items-center w-100"
    style="max-width: 500px"
  >
    <b-form-checkbox
      v-model="checked"
      class="purple-checkbox"
      @change="onCheckBoxChange"
    >
      {{ label }}
    </b-form-checkbox>

    <div class="centered-container" v-b-modal:[modalId]>
      <img :src="CheckboxInfoIcon" alt="Info" />
    </div>

    <b-modal :id="modalId" hide-footer centered title="PEP">
      <p class="my-4 modal-content-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </b-modal>
  </div>
</template>
<script>
import * as A from "@/assets";

export default {
  props: {
    label: {
      type: String,
    },
    modalId: {
      type: String,
    },
  },
  data() {
    return {
      checked: false,
      CheckboxInfoIcon: A.CheckboxInfoIcon,
    };
  },
  methods: {
    onCheckBoxChange() {
      this.$emit("onChange");
    },
  },
};
</script>

<style scoped>
.purple-checkbox input[type="checkbox"]:checked + label::before {
  background-color: #2b0a57;
  border-color: #2b0a57;
}

.purple-checkbox input[type="checkbox"]:checked + label::after {
  color: #2b0a57;
}

.modal-content-text {
  font-size: 16px;
  line-height: 24px;
}
</style>
