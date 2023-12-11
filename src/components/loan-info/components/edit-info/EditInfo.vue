<template>
    <b-row class="h-100">
      <b-col cols="1"></b-col>

      <b-col cols="10" class="centered-container" style="gap: 12px">
        <TextInput label="Amount" additional-label="200 - 10 000 €"/>
        <TextInput label="Duration" :additional-label="false"/>
        <SummaryItem/>
      </b-col>

      <b-col cols="1" class="centered-container">
        <div class="icon-button toggle-button" @click="toggleView"><img :src="LoanButtonRight" alt="LoanButtonRight"></div>
      </b-col>
    </b-row>
</template>
<script>
import * as A from "@/assets"
import * as LC from "./components"

export default {
  components: {
    SummaryItem: LC.SummaryItem,
    TextInput: LC.TextInput
  },
  methods: {
    toggleView() {
      this.$emit('toggleView');
    }
  },
  data: function () {
    return {
      LoanButtonRight: A.LoanButtonRight,
    }
  }
}
</script>

<style scoped>
.toggle-button {
  background-color: #FFFFFF
}

.toggle-button:hover {
  box-shadow: 0 1px 14px 0 #5948AD;
}
</style>