<template>
  <b-container class="main-container">
    <b-container class="wrapper">

      <b-row class="first-row">
        <b-col cols="1"></b-col>
        <b-col cols="10">
          <div class="centered-container user-name-text">Anna Maria Tamm Rodriguez Espinosa</div>
        </b-col>
        <b-col cols="1">
          <div class="icon-button toggle-button" @click="toggleView">
            <img :src="UserEditInfoButton" alt="UserEditInfoButton" >
          </div>
        </b-col>
      </b-row>

      <b-row class="second-row align-items-center">
        <b-col>
          <div class="d-flex justify-content-end align-items-center" style="gap: 6px">
            <img :src="UserIdIcon" alt="UserIdIcon" >
            <div class="user-info-text">38912052254</div>
          </div>
        </b-col>
        <b-col>
          <div class="centered-container" style="gap: 6px">
            <img :src="UserPhoneIcon" alt="UserPhoneIcon" >
            <div class="user-info-text">{{ infoData.userPhone }}</div>
          </div>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-start align-items-center" style="gap: 6px">
            <img :src="UserMailIcon" alt="UserMailIcon" >
            <div class="user-info-text">{{ infoData.userMail }}</div>
          </div>
        </b-col>
      </b-row>

    </b-container>
  </b-container>
</template>
<script>
import * as A from "@/assets";

export default {
  props: ["infoData"],
  methods: {
    toggleView() {
      this.$emit('toggleView');
    }
  },
  data: function () {
    return {
      UserEditInfoButton: A.UserEditInfoButton,
      UserIdIcon: A.UserIdIcon,
      UserPhoneIcon: A.UserPhoneIcon,
      UserMailIcon: A.UserMailIcon,
    }
  }
}
</script>

<style scoped>
.main-container {
  background-color: #F8F5FC;
  height: 105px;

  border: 5px solid #F3EEFB;
  border-radius: 30px;
  max-width: 800px;

  margin-bottom: 10px;
  padding: 0;

  color: #FDFDFD;
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
  background-color: #FDFDFD;

  border-radius: 0 0 30px 30px;
}

.user-name-text {
  font-size: 18px;
  line-height: 28px;

  color: #413C3C;
}

.toggle-button {
  background-color: #FDFDFD;
}

.toggle-button:hover {
  background-color: #2B0A57;
}

.toggle-button:hover img {
  filter: brightness(0) invert(1);
}

.user-info-text {
  font-size: 14px;
  line-height: 20px;

  color: #413C3C;
}

</style>