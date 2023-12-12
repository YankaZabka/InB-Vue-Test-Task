<template>
  <div id="app">
    <HeaderItem/>
    <MainContent>

      <LoanInfo/>
      <UserInfo/>

      <PersonalData/>
    </MainContent>
  </div>
</template>
<script>
import * as C from './components'

export default {
  name: 'App',
  components: {
    UserInfo: C.UserInfo,
    MainContent: C.MainContent,
    HeaderItem: C.HeaderItem,
    LoanInfo: C.LoanInfo,
    PersonalData: C.PersonalData
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
