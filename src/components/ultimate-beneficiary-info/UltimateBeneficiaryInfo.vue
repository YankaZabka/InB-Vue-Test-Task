<template>
  <b-container>
    <b-row class="mb-3">
      <b-col>
        <CustomTextInput placeholder="First name" />
      </b-col>
      <b-col>
        <CustomTextInput placeholder="Last name" />
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col>
        <CustomTextInput placeholder="Personal ID code" />
      </b-col>
      <b-col>
        <CustomSelectInput label="Residency" :options="mockOptions" />
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col>
        <CustomTextInput placeholder="Birth place" />
      </b-col>
      <b-col>
        <CustomTextInput placeholder="Birth date" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import CustomTextInput from "@/components/inputs/custom-text-input/CustomTextInput.vue";
import CustomSelectInput from "@/components/inputs/custom-select-input/CustomSelectInput.vue";
import * as D from "@/duck"

export default {
  components: {
    CustomTextInput: CustomTextInput,
    CustomSelectInput: CustomSelectInput,
  },
  data: function () {
    return {
      mockOptions: D.constants.MOCK_OPTIONS,
    };
  },
};
</script>
<style scoped>
>>> .col, .col-2, .col-6 {
  padding: 0 10px;
}

.title-text {
  font-size: 16px;
  line-height: 24px;
}
</style>
