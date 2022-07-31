<template>
  <loginsignup-page v-bind="loginsignupPageData" />
  <router-view />
</template>

<script>
import LoginsignupPage from "./components/LoginsignupPage.vue";

export default {
  name: "App",
  components: {
    LoginsignupPage,
  },
  data() {
    return { loginsignupPageData };
  },
};

const group1011Data = {
  yourEmail: "Your Email",
  eGjohndoeEmailCom: "E.g johndoe@email.com",
};

const group1012Data = {
  yourEmail: "Your password",
  eGjohndoeEmailCom: "Password",
  className: "group-100",
};

const loginsignupPageData = {
  group81: "rectangle-18.png",
  logo: "logo.png",
  drivingRenewableEn:
    "Driving Renewable Energy<br /> Technologies And Sustainability",
  visit: "Visit",
  bartumenergyCom: "bartumenergy.com",
  signIn1: "Sign In",
  welcomeBack: "welcome-back.png",
  signIn2: "Sign in",
  forgotPassword: "Forgot Password?",
  text: "",
  group1011Props: group1011Data,
  group1012Props: group1012Data,
};
</script>

<style scoped></style>
