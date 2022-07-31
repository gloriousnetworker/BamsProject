<template>
  <div class="container-center-horizontal">
    <div class="bams-dashboard-overview screen">
      <img class="group-5" :src="group5" />
      <div class="overlap-group1">
        <div class="overlap-group3">
          <div class="rectangle-10">
            <div class="flex-col">
              <img class="group-4" src="group-4.svg" />
              <img class="vector" src="vector.svg" />
              <img class="vector-1" src="vector-2.svg" />
              <img class="vector-2" src="vector-1.svg" />
              <img class="vector-3" src="vector-4.svg" />
            </div>
          </div>
          <div class="flex-col-1">
            <div class="overlap-group5">
              <img class="group" src="group.svg" />
              <div class="overview baloo2-medium-black-20px">
                {{ overview }}
              </div>
              <img class="group-687" src="group-687.svg" />
              <div class="group-487">
                <div class="hello-jane baloo2-medium-black-18px">
                  <span class="baloo2-medium-black-18px">{{ spanText1 }}</span>
                  <span class="baloo2-normal-black-18px">{{ spanText2 }}</span>
                </div>
                <img class="ellipse-1" :src="ellipse1" />
              </div>
            </div>
            <div class="flex-row">
              <div class="flex-col-2">
                <div
                  class="overlap-group6"
                  :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }"
                >
                  <div
                    class="hi-john-doe-good-morning baloo2-semi-bold-white-25px"
                  >
                    <span class="baloo2-semi-bold-white-25px">
                      {{ spanText3 }}
                    </span>
                    <span class="span1">{{ spanText4 }}</span>
                    <span class="span2">{{ spanText5 }}</span>
                  </div>
                  <div class="lorem-ipsum-dolor-si baloo2-normal-white-18px">
                    {{ loremIpsumDolorSi }}
                  </div>
                </div>
                <div class="overlap-group-container">
                  <div class="overlap-group8">
                    <div class="group-748">
                      <div class="number baloo2-medium-black-30px">
                        {{ number1 }}
                      </div>
                      <div class="x-pro baloo2-normal-black-16px-23">
                        {{ allProjects }}
                      </div>
                    </div>
                    <img class="vector-4" src="vector-5.svg" />
                  </div>
                  <div class="group-container">
                    <div class="group-748-1">
                      <h1 class="address baloo2-medium-black-30px">
                        {{ address }}
                      </h1>
                      <div class="current-load baloo2-normal-black-16px-23">
                        {{ currentLoad }}
                      </div>
                    </div>
                    <img class="group-751" src="group-751.svg" />
                  </div>
                  <div class="group-container-1">
                    <div class="group-748-2">
                      <div class="bes-8 baloo2-medium-black-30px">
                        {{ bes8 }}
                      </div>
                      <div class="x-pro baloo2-normal-black-16px-23">
                        {{ currentProduct }}
                      </div>
                    </div>
                    <img class="group-1" src="group-1.svg" />
                  </div>
                </div>
                <div class="projects baloo2-medium-black-20px">
                  {{ projects }}
                </div>
                <div class="overlap-group4">
                  <div class="group-767">
                    <div class="rectangle-86 border-0-5px-mist-gray"></div>
                    <img class="line-67" src="line-67.svg" />
                  </div>
                  <div class="group-763">
                    <div class="projects-name baloo2-medium-black-16px">
                      {{ projectsName }}
                    </div>
                    <div class="sample-project baloo2-normal-black-16px">
                      {{ sampleProject1 }}
                    </div>
                    <div class="sample-project-1 baloo2-normal-black-16px">
                      {{ sampleProject2 }}
                    </div>
                  </div>
                  <div class="group-762">
                    <div class="product baloo2-medium-black-16px">
                      {{ product }}
                    </div>
                    <div class="bes-1 baloo2-normal-black-16px">{{ bes1 }}</div>
                    <div class="bes-5 baloo2-normal-black-16px">{{ bes5 }}</div>
                  </div>
                  <div class="group-761">
                    <div class="system-type baloo2-medium-black-16px">
                      {{ systemType }}
                    </div>
                    <div class="residential baloo2-normal-black-16px">
                      {{ residential }}
                    </div>
                    <div class="mini-grid-system baloo2-normal-black-16px">
                      {{ miniGridSystem }}
                    </div>
                  </div>
                  <div class="group-760">
                    <div class="installation-type baloo2-medium-black16px">
                      {{ installationType }}
                    </div>
                    <div class="rooftop baloo2-normal-black-16px">
                      {{ rooftop }}
                    </div>
                    <div class="groundmount baloo2-normal-black-16px">
                      {{ groundmount }}
                    </div>
                  </div>
                  <div class="group-759">
                    <div class="no-of-panels baloo2-medium-black-16px">
                      {{ noOfPanels }}
                    </div>
                    <div class="number-1 baloo2-normal-black-16px">
                      {{ number2 }}
                    </div>
                    <div class="number-2 baloo2-normal-black-16px">
                      {{ number3 }}
                    </div>
                  </div>
                  <div class="group-758">
                    <div class="no-of-batteries baloo2-medium-black-16px">
                      {{ noOfBatteries }}
                    </div>
                    <div class="number-3 baloo2-normal-black-16px">
                      {{ number4 }}
                    </div>
                    <div class="number-4 baloo2-normal-black-16px">
                      {{ number5 }}
                    </div>
                  </div>
                  <div class="group-757">
                    <div class="status baloo2-medium-black-16px">
                      {{ status }}
                    </div>
                    <div class="ongoing baloo2-normal-black-16px">
                      {{ ongoing }}
                    </div>
                    <div class="completed baloo2-normal-black-16px">
                      {{ completed }}
                    </div>
                  </div>
                  <img class="vector-5" src="vector-3.svg" />
                  <div class="overlap-group border-0-5px-mist-gray">
                    <div class="view-all baloo2-normal-black-12px">
                      {{ viewAll }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="group-container-2">
                <div class="group-747">
                  <div class="group-742">
                    <div class="pretty-sunny baloo2-medium-white-15px">
                      {{ prettySunny1 }}
                    </div>
                    <div class="group-26">
                      <img class="group-25" src="group-25.svg" />
                      <div class="pretty-sunny-1 baloo2-medium-white-15px">
                        {{ prettySunny2 }}
                      </div>
                    </div>
                  </div>
                  <img class="group-27" src="group-27.svg" />
                  <div class="group-741">
                    <div class="pretty-sunny-2 baloo2-medium-white-18px">
                      {{ prettySunny3 }}
                    </div>
                    <GroupLine />
                  </div>
                </div>
                <div class="group-766">
                  <div class="group-765">
                    <div
                      class="save-big-go-green baloo2-semi-bold-white-25px"
                      v-html="number6"
                    ></div>
                    <img class="group-715" src="group-715.svg" />
                  </div>
                  <img class="rectangle-104" :src="rectangle104" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GroupLine from "../components/GroupLine.vue";
export default {
  name: "BamsDashboardOverview",
  components: {
    GroupLine,
  },
  props: [
    "group5",
    "overview",
    "spanText1",
    "spanText2",

    "overlapGroup6",
    "spanText3",
    "spanText4",
    "spanText5",
    "loremIpsumDolorSi",
    "number1",
    "allProjects",
    "address",
    "currentLoad",
    "bes8",
    "currentProduct",
    "projects",
    "projectsName",
    "sampleProject1",
    "sampleProject2",
    "product",
    "bes1",
    "bes5",
    "systemType",
    "residential",
    "miniGridSystem",
    "installationType",
    "rooftop",
    "groundmount",
    "noOfPanels",
    "number2",
    "number3",
    "noOfBatteries",
    "number4",
    "number5",
    "status",
    "ongoing",
    "completed",
    "viewAll",
    "prettySunny1",
    "prettySunny2",
    "prettySunny3",
    "number6",
    "rectangle104",
  ],
};
</script>

<style scoped>
.bams-dashboard-overview {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 774px;
  overflow: hidden;
  width: 1440px;
}

.group-5 {
  height: 39px;
  margin-left: 50px;
  margin-top: -126px;
  width: 31px;
}

.overlap-group1 {
  align-items: flex-start;
  background-color: var(--vivid-violet);
  display: flex;
  height: 1069px;
  margin-top: 87px;
  min-width: 1440px;
}

.overlap-group3 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 774px;
  min-width: 102px;
  padding: 16px 0;
}

.rectanle-10 {
  background-color: var(--mantis);
  border-radius: 5px;
  height: 50px;
  margin-top: 86px;
  width: 2px;
}

.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 34px;
  min-height: 724px;
  width: 31px;
}

.group-4 {
  height: 39px;
  width: 31px;
}

.vector {
  height: 22px;
  margin-left: 2px;
  margin-top: 62px;
  width: 27px;
}

.vector-1 {
  height: 25px;
  margin-left: 3px;
  margin-top: 31px;
  width: 25px;
}

.vector-3 {
  height: 24px;
  margin-left: 2px;
  margin-top: 465px;
  width: 25px;
}

.flex-col-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 764px;
  width: 1338px;
}

.overlap-group5 {
  align-items: center;
  background-color: var(--white);
  box-shadow: 0px 2px 30px #0000001a;
  display: flex;
  height: 70px;
  min-width: 1338px;
  padding: 0 25px;
}

.group {
  height: 14px;
  width: 18px;
}

.overview {
  letter-spacing: 0;
  margin-bottom: 3px;
  margin-left: 18px;
  min-height: 31px;
  min-width: 84px;
}

.group-687 {
  height: 27px;
  margin-bottom: 1px;
  margin-left: 950px;
  width: 25px;
}

.group-487 {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-left: 24px;
  min-width: 144px;
}

.hello-jane {
  letter-spacing: 0;
  min-height: 28px;
  min-width: 84px;
}

.ellipse-1 {
  align-self: flex-end;
  height: 40px;
  margin-bottom: -15px;
  margin-left: 1104px;
  object-fit: cover;
  width: 40px;
}

.flex-row {
  align-items: flex-start;
  display: flex;
  height: 664px;
  margin-right: 13px;
  margin-top: 30px;
  min-width: 1275px;
}

.flex-col-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 616px;
  width: 1050px;
}

.overlap-group6 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 150px;
  padding: 36px 49px;
  width: 1044px;
}

.hi-john-doe-good-morning {
  letter-spacing: 0;
  min-height: 39px;
  min-width: 293px;
  text-align: center;
}

.span1 {
  color: var(--white);
  font-family: var(--font-family-baloo_2);
  font-size: var(--font-size-xxl);
  font-weight: 500;
}

.span2 {
  color: var(--white);
  font-family: var(--font-family-baloo_2);
  font-size: var(--font-size-xxl);
  font-weight: 400;
}

.lorem-ipsum-dolor-si {
  letter-spacing: 0;
  margin-top: 10px;
  min-height: 28px;
  min-width: 434px;
  text-align: center;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  margin-top: 30px;
  min-width: 1044px;
}

.overlap-group8 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 150px;
  justify-content: flex-end;
  min-width: 333px;
}

.group-748 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 52px;
  width: 82px;
}

.number,
.bes-8,
.projects-name,
.product,
.system-type,
.installation-type,
.no-of-panels,
.no-of-batteries,
.status {
  letter-spacing: 0;
  line-height: 21px;
  min-height: 21px;
  white-space: nowrap;
}

.x-pro {
  letter-spacing: 0;
  line-height: 21px;
  margin-top: 10px;
  min-height: 21px;
  white-space: nowrap;
}

.vector-4 {
  height: 42px;
  margin-left: 52px;
  margin-top: 2px;
  width: 42px;
}

.group-container {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 150px;
  justify-content: flex-end;
  margin-left: 23px;
  min-width: 332px;
}

.group-748-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 0.31px;
  min-height: 42px;
  width: 130px;
}

.address {
  letter-spacing: 0;
  line-height: 21px;
  margin-bottom: -5px;
  min-height: 16px;
  white-space: nowrap;
}

.current-load {
  letter-spacing: 0;
  line-height: 21px;
  margin-bottom: -5px;
  margin-top: 10px;
  min-height: 16px;
  white-space: nowrap;
}

.group-751 {
  align-self: flex-end;
  height: 40px;
  margin-bottom: -278px;
  margin-left: 328px;
  width: 45px;
}
</style>
