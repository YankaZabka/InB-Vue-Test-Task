<template>
  <b-container class="main-container centered-container">
    <b-row class="row-wrapper m-0">
      <b-col sm="12" md="4">
        <div class="centered-container flex-column flex-shrink-0">
          Change your contact Info
          <div v-if="phoneError || emailError" class="validation-error">
            {{ phoneError ? "Incorrect phone number" : "Incorrect email" }}
          </div>
        </div>
      </b-col>

      <b-col
        sm="12"
        md="7"
        class="centered-container my-2 my-md-0 justify-content-md-start"
        style="gap: 20px"
      >
        <div class="centered-container" style="gap: 6px">
          <img
            :src="UserPhoneIcon"
            alt="UserPhoneIcon"
            :class="{ 'filter-applied': focusedInput === 'phone' }"
          />
          <input
            class="input-element"
            v-model="editedInfo.userPhone"
            @input="onPhoneChange"
            @focus="focusInput('phone')"
            :style="{ borderBottomColor: phoneBorderColor }"
          />
        </div>
        <div class="centered-container" style="gap: 6px">
          <img
            :src="UserMailIcon"
            alt="UserMailIcon"
            :class="{ 'filter-applied': focusedInput === 'email' }"
          />
          <input
            class="input-element"
            v-model="editedInfo.userMail"
            style="min-width: 150px"
            @input="onEmailChange"
            @focus="focusInput('email')"
            :style="{ borderBottomColor: emailBorderColor }"
          />
        </div>
      </b-col>

      <b-col sm="12" md="1" class="d-flex justify-content-end p-0">
        <div class="icon-button toggle-button" @click="toggleView">
          <img :src="UserViewInfoButton" alt="UserViewInfoButton" />
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
      this.$emit("updateInfo", this.editedInfo);
    },
    onEmailChange(event) {
      this.emailError = !/^\S+@\S+\.\S+$/.test(event.target.value);
    },
    onPhoneChange(event) {
      this.phoneError = !/^\+\d{8,15}$/.test(event.target.value);
    },
    focusInput(inputType) {
      this.focusedInput = inputType;
    },
  },
  data() {
    return {
      editedInfo: { ...this.infoData },

      UserPhoneIcon: A.UserPhoneIcon,
      UserMailIcon: A.UserMailIcon,
      UserViewInfoButton: A.UserViewInfoButton,

      phoneError: false,
      emailError: false,

      focusedInput: null,
    };
  },
  computed: {
    phoneBorderColor() {
      return this.phoneError
        ? "#EB5757"
        : this.focusedInput === "phone"
        ? "purple"
        : "#dedede";
    },
    emailBorderColor() {
      return this.emailError
        ? "red"
        : this.focusedInput === "email"
        ? "purple"
        : "#dedede";
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: #f8f5fc;
  min-height: 58px;

  border-radius: 30px;

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
  color: #413c3c;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid #dedede;

  max-width: 80px;
}

.input-element:focus {
  background-color: transparent;
  border: none;
  outline: none;

  border-bottom: 1px solid #dedede;
}

.filter-applied {
  filter: invert(25%) sepia(85%) saturate(6000%) hue-rotate(250deg)
  brightness(50%) contrast(100%);
}

.validation-error {
  font-size: 10px;
  color: #eb5757;
}

.toggle-button {
  background-color: #2b0a57;
}

.toggle-button:hover {
  background-color: #fdfdfd;
}

.toggle-button:hover img {
  filter: invert(100%) brightness(200%);
}
</style>
