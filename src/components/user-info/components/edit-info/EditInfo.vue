<template>
  <b-container class="main-container centered-container">

      <b-row class="row-wrapper m-0">

        <b-col sm="12" md="4">
          <div class="centered-container flex-shrink-0">Change your contact Info</div>
        </b-col>

        <b-col sm="12" md="7" class="centered-container my-sm-2 my-md-0 justify-content-md-start" style="gap: 20px">
          <div class="centered-container" style="gap: 6px">
            <img :src="UserPhoneIcon" alt="UserPhoneIcon" >
            <input class="input-element" v-model="editedInfo.userPhone">
          </div>
          <div class="centered-container" style="gap: 6px">
            <img :src="UserMailIcon" alt="UserMailIcon" >
            <input class="input-element" v-model="editedInfo.userMail" style="min-width: 150px">
          </div>
        </b-col>

        <b-col sm="12" md="1" class="d-flex justify-content-end p-0">
          <div class="icon-button toggle-button" @click="toggleView">
            <img :src="UserViewInfoButton" alt="UserViewInfoButton" >
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
  min-height: 58px;

  border-radius: 30px;
  max-width: 800px;

  margin-bottom: 10px;

  padding: 12px;
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
  font-size: 14px;
  line-height: 24px;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid #DEDEDE;

  max-width: 80px;
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