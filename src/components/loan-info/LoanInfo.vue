<template>
  <b-container class="main-container d-flex" style="z-index: 1">
    <ViewInfo
      v-if="ViewMode"
      @toggleView="toggleView"
      :loanData="loanData"
      :class="{ 'slide-in': ViewMode, 'slide-out': !ViewMode }"
    />
    <EditInfo
      v-else
      @toggleView="toggleView"
      :loanData="loanData"
      @updateData="updateData"
      :class="{ 'slide-in': !ViewMode, 'slide-out': ViewMode }"
    />
  </b-container>
</template>

<script>
import * as LC from "./components";

export default {
  components: {
    ViewInfo: LC.ViewInfo,
    EditInfo: LC.EditInfo,
  },
  data: function () {
    return {
      ViewMode: true,

      loanData: {
        amount: "2700",
        duration: "15",
      },
    };
  },
  methods: {
    toggleView() {
      this.ViewMode = !this.ViewMode;
    },
    updateData(newData) {
      this.loanData = newData;
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: #2b0a57;
  min-height: 58px;
  border-radius: 30px;

  margin-bottom: 10px;

  color: #fdfdfd;

  padding: 13px;
}
</style>
