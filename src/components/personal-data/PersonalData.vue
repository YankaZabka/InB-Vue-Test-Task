<template>
  <b-container>
    <b-row class="mb-3">
      <b-col>
        <div class="title-text">Personal Data</div>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col>
        <CustomTextInput label="Country" placeholder="Estonia" />
      </b-col>
      <b-col>
        <CustomSelectInput label="County" :options="countries" />
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col>
        <CustomSelectInput :options="cities" placeholder="City / Parish" />
      </b-col>
      <b-col>
        <CustomTextInput :options="cities" placeholder="Village / Township" />
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col md="6">
        <CustomTextInput placeholder="Street" />
      </b-col>
      <b-col md="2">
        <CustomTextInput placeholder="House" />
      </b-col>
      <b-col md="2">
        <CustomTextInput placeholder="Apartment" />
      </b-col>
      <b-col md="2">
        <CustomTextInput placeholder="Postal Code" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import CustomTextInput from "@/components/inputs/custom-text-input/CustomTextInput.vue";
import CustomSelectInput from "@/components/inputs/custom-select-input/CustomSelectInput.vue";
import * as D from "@/duck";

export default {
  components: {
    CustomTextInput: CustomTextInput,
    CustomSelectInput: CustomSelectInput,
  },
  data: function () {
    return {
      cities: D.constants.CITIES,
      countries: D.constants.COUNTRIES,
    };
  },
};
</script>
<style scoped>
>>> .col,
.col-2,
.col-6 {
  padding: 0 10px;
}

.title-text {
  font-size: 16px;
  line-height: 24px;
}
</style>
