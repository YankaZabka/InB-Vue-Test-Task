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
          <b-col class="d-flex justify-content-end">
            <b-button variant="outline"><img :src="HeaderButton" alt="HeaderButton"></b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>
</template>

<script>
import {InBankLogo, HeaderButton} from "../../assets"

export default {
  data: function () {
    return {
      InBankLogo: InBankLogo,
      HeaderButton: HeaderButton
    }
  }
}
</script>
