<template>
  <b-container class="main-container d-flex">
    <transition name="slide-fade">
      <ViewInfo v-if="ViewMode" @toggleView="toggleView" :loanData="loanData" />
      <EditInfo
        v-else
        @toggleView="toggleView"
        :loanData="loanData"
        @updateData="updateData"
      />
    </transition>
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

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
