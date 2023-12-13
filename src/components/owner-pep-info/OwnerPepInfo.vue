<template>
  <b-container>
    <b-row class="mb-3">
      <b-col class="mb-2" md="6">
        <CustomSelectInput label="Relationship to the PEP" :options="mockOptions"/>
      </b-col>
      <b-col md="6">
        <CustomSelectInput label="PEP region" :options="mockOptions" />
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col class="mb-2" md="6">
        <CustomSelectInput label="PEP position" :options="mockOptions"/>
      </b-col>
      <b-col class="mb-2" md="6">
        <CustomSelectInput label="Duration as PEP or related to a PEP" :options="mockOptions" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import CustomSelectInput from "@/components/inputs/custom-select-input/CustomSelectInput.vue";
import * as D from "@/duck"

export default {
  components: {
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
