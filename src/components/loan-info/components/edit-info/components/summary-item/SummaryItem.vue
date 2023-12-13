<template>
  <div
    class="wrapper d-flex justify-content-center align-items-center flex-shrink-0"
    style="gap: 12px"
  >
    <div style="font-weight: 300">Monthly Payment</div>
    <div>
      {{ (loanData.amount / loanData.duration).toFixed(1) }}<sup>€</sup>
    </div>
  </div>
</template>
<script>
export default {
  props: ["loanData"],
};
</script>
<style scoped>
.wrapper {
  background-color: #3a156c;

  height: 40px;
  border-radius: 30px;
  padding: 10px;
}
</style>
