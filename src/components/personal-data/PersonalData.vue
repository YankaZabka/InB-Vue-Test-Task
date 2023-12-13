<template>
  <b-container>
    <b-row class="mb-3">
      <b-col>
        <div class="title-text">Personal Data</div>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col>
        <CustomTextInput label="First Name" placeholder="Estonia" />
      </b-col>
      <b-col>
        <CustomSelectInput label="City" :options="['Minsk', 'Moscow']" />
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col>
        <CustomSelectInput label="City" :options="['Minsk', 'Moscow']" />
      </b-col>
      <b-col>
        <CustomTextInput label="First Name" placeholder="Estonia" />
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col cols="6">
        <CustomTextInput label="First Name" placeholder="Estonia" />
      </b-col>
      <b-col cols="2">
        <CustomTextInput label="First Name" placeholder="Estonia" />
      </b-col>
      <b-col cols="2">
        <CustomTextInput label="First Name" placeholder="Estonia" />
      </b-col>
      <b-col cols="2">
        <CustomTextInput label="First Name" placeholder="Estonia" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import CustomTextInput from "@/components/inputs/custom-text-input/CustomTextInput.vue";
import CustomSelectInput from "@/components/inputs/custom-select-input/CustomSelectInput.vue";

export default {
  components: {
    CustomTextInput: CustomTextInput,
    CustomSelectInput: CustomSelectInput,
  },
};
</script>
<style scoped>
.title-text {
  font-size: 16px;
  line-height: 24px;
}
</style>
