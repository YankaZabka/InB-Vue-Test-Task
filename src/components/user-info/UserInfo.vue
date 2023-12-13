<template>
  <fragment>
    <ViewInfo v-if="ViewMode" @toggleView="toggleView" :infoData="infoData" :class="{ 'slide-in': ViewMode, 'slide-out': !ViewMode }"/>
    <EditInfo
      v-else
      @toggleView="toggleView"
      @updateInfo="updateInfo"
      :infoData="infoData"
      :class="{ 'slide-in': !ViewMode, 'slide-out': ViewMode }"
    />
  </fragment>
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
      infoData: {
        userPhone: "123456789",
        userMail: "anna.tamm@gmail.com",
      },
    };
  },
  methods: {
    toggleView() {
      this.ViewMode = !this.ViewMode;
    },
    updateInfo(newInfo) {
      this.infoData = newInfo;
    },
  },
};
</script>
