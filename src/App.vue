<template>
  <div id="app">
    <HeaderItem/>
    <MainContent>

      <LoanInfo/>
      <UserInfo/>

      <PersonalData/>

      <DividerItem text="Or"/>

      <CustomToggleSwitcher/>

      <DividerItem />

      <CustomCheckboxInput/>
      <CustomCheckboxInput/>

      <ContinueButton/>

    </MainContent>
  </div>
</template>
<script>
import * as C from './components'

export default {
  name: 'App',
  components: {
    CustomCheckboxInput: C.Inputs.CustomCheckBoxInput,
    UserInfo: C.UserInfo,
    MainContent: C.Layout.MainContent,
    HeaderItem: C.Layout.HeaderItem,
    LoanInfo: C.LoanInfo,
    PersonalData: C.PersonalData,
    CustomToggleSwitcher: C.Inputs.CustomToggleSwitcher,
    DividerItem: C.DividerItem,
    ContinueButton: C.ContinueButton,
  }
}
</script>

<style>
@font-face {
  font-family: OpenSans;
  src: url('~@/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf');
}

.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 34px;
  height: 34px;

  border-radius: 50%;

  cursor: pointer;
}
</style>
