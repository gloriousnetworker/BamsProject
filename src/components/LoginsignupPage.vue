<template>
  <div class="container-center-horizontal">
    <div class="login-signup-page screen">
      <div class="group-container">
        <div
          class="group-81"
          :style="{ 'background-image': 'url(' + group81 + ')' }"
        >
          <div class="rectangle-21"></div>
        </div>
        <div class="group-94">
          <div class="group-91">
            <img class="logo" src="../assets/logo@2x.png" />
          </div>
          <h1 class="driving-renewable-en" v-html="drivingRenewableEn"></h1>
        </div>
        <div class="overlap-group">
          <img class="icon-globe" src="../assets/vector@2x.svg" />
          <div class="visit">{{ visit }}</div>
          <div class="bartumenergycom">{{ bartumenergyCom }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="overlap-group3">
    <div class="group-791">
      <div class="sign-in">{{ signIn1 }}</div>
      <div class="overlap-group2">
        <img class="welcome-back" src="../assets/welcome-back@1x.png" />
        <div class="group-417">
          <group101
            :yourEmail="group1011Props.yourEmail"
            :eGJohndoeEmailCom="group1011Props.eGJohndoeEmailCom"
          />

          <div class="overlap-group1">
            <group101
              :yourEmail="group1012Props.yourEmail"
              :eGJohndoeEmailCom="group1012Props.eGJohndoeEmailCom"
              :className="group1012Props.className"
            />
            <img class="vector" src="../assets/vector-1@2x.svg" />
          </div>
          <div class="group-86">
            <div class="overlap-group-1">
              <div class="sign-in-1">
                <router-link :to="{ name: 'BamsDashboardOverview' }">{{
                  signIn2
                }}</router-link>
              </div>
            </div>
            <div class="forgot-password">{{ forgotPassword }}</div>
          </div>
        </div>
      </div>
      <div class="text baloo2-normal-black-16px">{{ text }}</div>
    </div>
  </div>
</template>

<script>
import Group101 from "./GroupPage.vue";

export default {
  name: "LoginsignupPage",
  components: {
    Group101,
  },
  props: [
    "group81",
    "logo",
    "drivingRenewableEn",
    "visit",
    "bartumenergyCom",
    "signIn1",
    "welcomeBack",
    "signIn2",
    "forgotPassword",
    "text",
    "group1011Props",
    "group1012Props",
  ],
};
</script>

<style>
.login-signup-page {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  width: 1440px;
}

.group-container {
  height: 774px;
  position: relative;
  width: 608px;
}

.group-81 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 774px;
  left: 0;
  min-width: 608px;
  position: absolute;
  top: 0;
}

.rectangle-21 {
  background-color: #87c76ee6;
  height: 774px;
  width: 608px;
}

.group-94 {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 100px;
  min-height: 237px;
  position: absolute;
  top: 268px;
  width: 410px;
}

.group-91 {
  align-items: center;
  background-color: var(--white);
  border-radius: 50px;
  display: flex;
  height: 115px;
  margin-right: 3px;
  min-width: 365px;
  padding: 0 45px;
}

.logo {
  height: 69px;
  object-fit: cover;
  width: 274px;
}

.driving-renewable-en {
  color: var(--white);
  font-family: var(--font-family-baloo_2);
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: 0;
  margin-right: 2px;
  margin-top: 28px;
  min-height: 94px;
  min-width: 408px;
  text-align: center;
}

.overlap-group {
  height: 28px;
  left: 225px;
  position: absolute;
  top: 678px;
  width: 198px;
}

.icon-globe {
  height: 21px;
  left: 153px;
  position: absolute;
  top: 3px;
  width: 22px;
}

.group-92 {
  align-items: flex-start;
  display: flex;
  height: 28px;
  left: 0;
  min-width: 198px;
  position: absolute;
  top: 0;
}

.visit {
  letter-spacing: 0;
  margin-left: 14px;
  min-height: 28px;
  min-width: 146px;
  text-align: center;
  color: aliceblue;
}

.bartumenergycom {
  letter-spacing: 0;
  margin-left: 14px;
  min-height: 28px;
  min-width: 146px;
  text-align: center;
  color: aliceblue;
}

.overlap-group3 {
  height: 0px;
  margin-left: 1070px;
  margin-top: 20px;
  margin-bottom: -100px;
  position: relative;
  width: 485px;
}

.group-791 {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 446px;
  position: absolute;
  top: 0;
  width: 485px;
  margin-top: -700px;
}

.sign-in {
  color: var(--black);
  font-family: var(--font-family-baloo_2);
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: 0;
  margin-right: 3px;
  margin-top: 63px;
  min-height: 47px;
  min-width: 86px;
}

.overlap-group2 {
  height: 312px;
  margin-right: 4px;
  margin-top: 24px;
  position: relative;
  width: 481px;
}

.welcome-back {
  height: 27px;
  left: 115px;
  position: absolute;
  top: -120px;
  width: 248px;
}

.group-417 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 312px;
  position: absolute;
  top: 0;
  width: 481px;
}

.overlap-group1 {
  height: 85px;
  margin-top: 30px;
  position: relative;
  width: 483px;
}

.vector {
  height: 16px;
  left: 441px;
  position: absolute;
  top: 55px;
  width: 20px;
}

.group-86 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  min-height: 82px;
  width: 483px;
}

.overlap-group-1 {
  align-items: flex-start;
  background-color: var(--mantis);
  border-radius: 50px;
  box-shadow: 0px 4px 4px #87c76e26;
  display: flex;
  height: 45px;
  min-width: 481px;
  padding: 8px 214px;
}

.sign-in-1 {
  color: var(--white);
  font-family: var(--font-family-baloo_2);
  font-size: var(--font-size-s);
  font-weight: 500;
  letter-spacing: 0;
  min-height: 28px;
}

.text {
  left: 233px;
  letter-spacing: 0;
  position: absolute;
  top: 204px;
}

.forgot-password {
  letter-spacing: 0;
  min-height: 22px;
  margin-bottom: 20px;
  margin-top: 12px;
  font-size: small;
}
</style>
