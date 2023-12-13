<template>
  <div class="d-flex justify-content-between align-items-center w-100" style="max-width: 500px">
    <b-form-checkbox v-model="checked" class="purple-checkbox">
      Check me out
    </b-form-checkbox>

    <div class="centered-container" v-b-modal.modal-center>
      <img :src="CheckboxInfoIcon" alt="Info" />
    </div>

    <b-modal id="modal-center" hide-footer centered title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>
<script>
import * as A from "@/assets";

export default {
  props: {
    info: {
      type: String,
      default: "Placeholder",
    },
  },
  data() {
    return {
      checked: false,
      CheckboxInfoIcon: A.CheckboxInfoIcon,
    };
  },
};
</script>

<style>
.purple-checkbox input[type="checkbox"]:checked + label::before {
  background-color: #2b0a57;
  border-color: #2b0a57;
}

.purple-checkbox input[type="checkbox"]:checked + label::after {
  color: #2b0a57;
}
</style>
