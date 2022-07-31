<template>
  <div :class="[`group-101`, className || ``]">
    <div class="your-email baloo2-normal-black-16px">
      {{ yourEmail }}
      <div class="overlap-group-2">
        <div class="eg-johndoeemailcom baloo2-normal-black-16px-2">
          {{ eGJohndoeEmailCom }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupPage",
  props: ["yourEmail", "eGJohndoeEmailCom", "className"],
};
</script>

<style>
.group-101 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 85px;
  width: 483px;
}

.your-email,
.eg-johndoeemailcom {
  letter-spacing: 0;
  min-height: 25px;
}

.overlap-group-2 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px solid var(mantis);
  border-radius: 5px;
  box-shadow: 0px 4px 4px #87c76e26;
  display: flex;
  height: 45px;
  margin-top: 15px;
  min-width: 481px;
  padding: 9px 31px;
}

.group-101.group-100 {
  left: 0;
  position: absolute;
  top: 0;
}

.group-101.group-100 .overlap-group-2 {
  border: 1px solid #c4c4c4;
  box-shadow: unset;
}

.forgot-password {
  letter-spacing: 0;
  min-height: 22px;
}
</style>
