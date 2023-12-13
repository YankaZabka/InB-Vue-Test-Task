<template>
  <b-container class="main-container">
    <b-row class="first-row mx-3">
      <b-col cols="2"></b-col>
      <b-col cols="8">
        <div class="centered-container user-name-text">
          Anna Maria Tamm Rodriguez Espinosa
        </div>
      </b-col>
      <b-col cols="2" class="d-flex justify-content-end">
        <div class="icon-button toggle-button" @click="toggleView">
          <img :src="UserEditInfoButton" alt="UserEditInfoButton" />
        </div>
      </b-col>
    </b-row>

    <b-row class="second-row align-items-center">
      <b-col sm="12" md="4">
        <div
          class="d-flex justify-content-center justify-content-md-end align-items-center"
          style="gap: 6px"
        >
          <img :src="UserIdIcon" alt="UserIdIcon" />
          <div class="user-info-text">38912052254</div>
        </div>
      </b-col>
      <b-col sm="12" md="4">
        <div class="centered-container" style="gap: 6px">
          <img :src="UserPhoneIcon" alt="UserPhoneIcon" />
          <div class="user-info-text">{{ infoData.userPhone }}</div>
        </div>
      </b-col>
      <b-col sm="12" md="4">
        <div
          class="d-flex justify-content-center justify-content-md-start align-items-center"
          style="gap: 6px"
        >
          <img :src="UserMailIcon" alt="UserMailIcon" />
          <div class="user-info-text">{{ infoData.userMail }}</div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import * as A from "@/assets";

export default {
  props: ["infoData"],
  methods: {
    toggleView() {
      this.$emit("toggleView");
    },
  },
  data: function () {
    return {
      UserEditInfoButton: A.UserEditInfoButton,
      UserIdIcon: A.UserIdIcon,
      UserPhoneIcon: A.UserPhoneIcon,
      UserMailIcon: A.UserMailIcon,
    };
  },
};
</script>

<style scoped>
.main-container {
  background-color: #f8f5fc;
  height: 210px;
  overflow: hidden;

  border: 5px solid #f3eefb;
  border-radius: 30px;

  margin-bottom: 10px;
  padding: 0;

  color: #fdfdfd;
}

@media (min-width: 768px) {
  .main-container {
    height: 105px;
  }
}

.wrapper {
  height: 100%;
  width: 100%;
}

.first-row {
  height: 50%;

  align-items: center;
}

.second-row {
  height: 50%;
  background-color: #fdfdfd;

  border-radius: 0 0 30px 30px;
}

.user-name-text {
  font-size: 18px;
  line-height: 28px;

  color: #413c3c;
}

.toggle-button {
  background-color: #fdfdfd;
}

.toggle-button:hover {
  background-color: #2b0a57;
}

.toggle-button:hover img {
  filter: brightness(0) invert(1);
}

.user-info-text {
  font-size: 14px;
  line-height: 20px;

  color: #413c3c;
}
</style>
