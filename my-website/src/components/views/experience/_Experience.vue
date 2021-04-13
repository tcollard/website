<template>
  <div class="experience">
    <h2>{{ $t("experience.title") }}</h2>
    <div
      class="timeLine"
      v-for="(experience, index) in experiences"
      :key="index"
    >
      <ExperienceContainer
        :index="index"
        :xp="experience"
        :length="experiences.length - 1"
      ></ExperienceContainer>
    </div>
  </div>
</template>

<script>
import ExperienceContainer from "./ExperienceContainer.vue";
import { experiences } from "../../../data/data.js";

export default {
  name: "Experience",
  components: {
    ExperienceContainer,
  },
  data() {
    return {
      experiences,
      state: false,
    };
  },
};
</script>

<style scoped>
.experience {
  text-align: center;
  padding: 8% 10% 8% 10%;
}

.timeLine {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>