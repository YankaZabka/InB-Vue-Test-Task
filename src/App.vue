<template>
  <div id="app">
    <HeaderItem />
    <MainContent>
      <LoanInfo />
      <UserInfo />

      <PersonalData />

      <DividerItem text="Or" />

      <CustomToggleSwitcher label="Add address manually"/>

      <DividerItem />

      <CustomCheckboxInput label="Neither I nor my family member is PEP" modalId="1"/>
      <FamilyMemberPepInfo />

      <CustomCheckboxInput label="I’m the ultimate beneficiary" modalId="2"/>
      <UltimateBeneficiaryInfo/>

      <CustomCheckboxInput label="The beneficial owner is not a PEP" modalId="3"/>
      <OwnerPepInfo/>

      <ContinueButton />
    </MainContent>
  </div>
</template>
<script>
import * as C from "./components";

export default {
  name: "App",
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
    FamilyMemberPepInfo: C.FamilyMemberPepInfo,
    UltimateBeneficiaryInfo: C.UltimateBeneficiaryInfo,
    OwnerPepInfo: C.OwnerPepInfo,
  },
};
</script>

<style>
@font-face {
  font-family: OpenSans;
  src: url("~@/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf");
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
