<template>
  <b-container class="main-container">
    <b-container class="wrapper p-0">

      <b-row class="row-wrapper m-0">
        <b-col cols="6" class="d-flex justify-content-between align-items-center">
          <div class="centered-container flex-shrink-0">Change your contact Info</div>

          <div class="centered-container" style="gap: 6px">
            <img :src="UserPhoneIcon" alt="UserPhoneIcon" >
            <input class="input-element" v-model="editedInfo.userPhone">
          </div>
        </b-col>
        <b-col cols="6" class="d-flex justify-content-between p-0">
          <div class="centered-container" style="gap: 6px">
            <img :src="UserMailIcon" alt="UserMailIcon" >
            <input class="input-element" v-model="editedInfo.userMail">
          </div>

          <div class="icon-button toggle-button" @click="toggleView">
            <img :src="UserViewInfoButton" alt="UserViewInfoButton" >
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
      this.$emit('updateInfo', this.editedInfo);
    },
  },
  data() {
    return {
      editedInfo: { ...this.infoData },
      UserPhoneIcon: A.UserPhoneIcon,
      UserMailIcon: A.UserMailIcon,
      UserViewInfoButton: A.UserViewInfoButton,
    };
  }
}
</script>

<style scoped>
.main-container {
  background-color: #F8F5FC;
  height: 58px;

  border-radius: 30px;
  max-width: 800px;

  margin-bottom: 10px;
}

.wrapper {
  height: 100%;
  width: 100%;
}

.row-wrapper {
  height: 100%;
  width: 100%;

  align-items: center;
}

.input-element {
  color: #413C3C;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid #DEDEDE;

  max-width: 100px;
}

.input-element:focus {
  background-color: transparent;
  border: none;
  outline: none;

  border-bottom: 1px solid #DEDEDE;
}

.toggle-button {
  background-color: #2B0A57;
}

.toggle-button:hover {
  background-color: #FDFDFD;
}

.toggle-button:hover img {
  filter: invert(100%) brightness(200%)
}
</style>