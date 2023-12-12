<template>
    <b-row class="w-100 flex-grow-1">

      <b-col cols="1" class="centered-container">
        <div class="icon-button" @click="toggleView"><img :src="LoanButtonLeft" alt="LoanButtonLeft"></div>
      </b-col>

      <b-col cols="10" class="d-flex justify-content-center flex-wrap">
        <div class="final-text centered-container">Your loan application</div>
        <div class="final-sum centered-container">2700<sup>€</sup> / 36 months</div>
      </b-col>

      <b-col cols="1"></b-col>
    </b-row>
</template>
<script>
import * as A from "@/assets"

export default {
  methods: {
    toggleView() {
      this.$emit('toggleView');
    }
  },
  data: function () {
    return {
      LoanButtonLeft: A.LoanButtonLeft
    }
  }
}
</script>

<style scoped>
.final-text {
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #FDFDFD;

  margin-right: 12px;
}

.final-sum {
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
}
</style>