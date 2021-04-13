<template>
  <div class="skills">
    <h2>{{ $t("navBar.skills") }}</h2>
    <div class="listSkills">
      <div v-for="(skill, index) in skills" :key="index" class="oneSkill">
        <ProgressBar :skill="skill"></ProgressBar>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import { skills } from "../../../data/data.js";

export default {
  name: "Skills",
  components: {
    ProgressBar,
  },
  data() {
    return {
      skills,
    };
  },
};
</script>

<style scoped>
.listSkills {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.oneSkill {
  width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
}

.skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding: 8% 10% 8% 10%;
}
</style>