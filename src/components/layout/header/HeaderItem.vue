<template>
    <b-navbar class="py-4">
      <b-container>
        <b-row class="w-100">
          <b-col></b-col>

          <b-col class="d-flex justify-content-center">
            <b-navbar-brand class="mx-0" href="#">
              <img :src="InBankLogo" alt="Logo">
            </b-navbar-brand>
          </b-col>

          <b-col class="d-flex justify-content-end align-items-center">
            <div class="icon-button header-button" role="button">
              <img :src="HeaderButton" alt="HeaderButton">
            </div>
          </b-col>

        </b-row>
      </b-container>
    </b-navbar>
</template>

<script>
import * as A from "@/assets"

export default {
  data: function () {
    return {
      InBankLogo: A.InBankLogo,
      HeaderButton: A.HeaderButton
    }
  }
}
</script>

<style>
.header-button:hover {
  box-shadow: 0 1px 25px 4px #5948AD;
  transition: box-shadow 0.3s ease-in-out;
}
</style>
