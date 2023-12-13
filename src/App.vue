<template>
  <div id="app">
    <HeaderItem />
    <MainContent>
      <LoanInfo />
      <UserInfo />

      <PersonalData />

      <DividerItem text="Or" />

      <CustomToggleSwitcher label="Add address manually" />

      <DividerItem />

      <CustomCheckboxInput
        label="Neither I nor my family member is PEP"
        modalId="1"
        @onChange="showFamilyMemberPepInfo = !showFamilyMemberPepInfo"
      />
      <FamilyMemberPepInfo v-if="showFamilyMemberPepInfo" />

      <CustomCheckboxInput
        label="I’m the ultimate beneficiary"
        modalId="2"
        @onChange="showUltimateBeneficiaryInfo = !showUltimateBeneficiaryInfo"
      />
      <UltimateBeneficiaryInfo v-if="showUltimateBeneficiaryInfo" />

      <CustomCheckboxInput
        label="The beneficial owner is not a PEP"
        modalId="3"
        v-if="showUltimateBeneficiaryInfo"
        @onChange="showOwnerPepInfo = !showOwnerPepInfo"
      />
      <OwnerPepInfo v-if="showUltimateBeneficiaryInfo && showOwnerPepInfo" />

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
  data: function () {
    return {
      showFamilyMemberPepInfo: false,
      showUltimateBeneficiaryInfo: false,
      showOwnerPepInfo: false,
    };
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

.slide-in {
  animation: slideIn 0.3s ease forwards;
}

.slide-out {
  animation: slideOut 0.3s ease forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
