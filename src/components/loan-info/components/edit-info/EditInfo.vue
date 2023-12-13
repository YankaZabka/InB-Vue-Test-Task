<template>
  <b-row class="h-100 flex-grow-1">
    <b-col
      md="4"
      sm="12"
      class="d-flex justify-content-center justify-content-md-end flex-grow-1"
    >
      <TextInput
        label="Amount"
        :input-value="loanData.amount"
        :limits="{ min: 200, max: 10000 }"
        additional-label="200 - 10 000 €"
        @updateInputValue="updateAmount"
        placeholder="EUR"
      />
    </b-col>

    <b-col md="3" sm="12">
      <TextInput
        :input-value="loanData.duration"
        label="Duration"
        :limits="{ min: 1, max: 36 }"
        @updateInputValue="updateDuration"
        placeholder="months"
      />
    </b-col>

    <b-col
      md="5"
      sm="12"
      class="d-flex justify-content-between align-items-center"
    >
      <SummaryItem :loanData="loanData" />
      <div class="icon-button toggle-button flex-shrink-0" @click="toggleView">
        <img :src="LoanButtonRight" alt="LoanButtonRight" />
      </div>
    </b-col>
  </b-row>
</template>
<script>
import * as A from "@/assets";
import * as LC from "./components";

export default {
  props: ["loanData"],
  components: {
    SummaryItem: LC.SummaryItem,
    TextInput: LC.TextInput,
  },
  methods: {
    toggleView() {
      this.$emit("toggleView");
    },
    updateAmount(newAmount) {
      this.$emit("updateData", { ...this.loanData, amount: newAmount });
    },
    updateDuration(newDuration) {
      this.$emit("updateData", { ...this.loanData, duration: newDuration });
    },
  },
  data: function () {
    return {
      LoanButtonRight: A.LoanButtonRight,
    };
  },
};
</script>

<style scoped>
.toggle-button {
  background-color: #ffffff;
}

.toggle-button:hover {
  box-shadow: 0 1px 14px 0 #5948ad;
}
</style>
