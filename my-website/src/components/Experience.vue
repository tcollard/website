<template>
    <div class="experience">
        <h1>{{ $t('experience.title') }}</h1>
        <div class="timeLine" v-for="(experience, index) in experiences" :key="index">
            <ExperienceContainer :index="index" :xp="experience" :length="experiences.length - 1"></ExperienceContainer>
        </div>
    </div>
</template>

<script>
import ExperienceContainer from "./ExperienceContainer.vue";

export default ({
    name: 'Experience',
    components: {
        ExperienceContainer,
    },
    data() {
        return {
            experiences: ['neocity', 'iota', '42', 'whv', 'cepi', 'cdb'],
            state: false,
        }
    },
})
</script>

<style scoped>
/* Phone */
    /* @media only screen and (max-width: 1024px) {
        .experience {
            width: 100%;
        }
    }
 */
    .experience {
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: center; */
        /* align-items: center; */
        text-align: center;
        padding: 8% 10% 8% 10%;
    }

    .timeLine {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

</style>