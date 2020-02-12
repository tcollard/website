<template>
    <div class="skills">
        <h1 class="title">{{ $t('navBar.skills') }}</h1>
        <div class="listSkills">
            <div v-for="(skill, index) in skills" :key="index" class="oneSkill">
                <ProgressBar :skill="skill"></ProgressBar>
            </div>
        </div>
    </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue'

export default {
    name: 'Skills',
    components: {
        ProgressBar,
    },
    data() {
        return {
            skills: [
                {
                    name: 'ANGULAR',
                    rate: 70,
                },
                {
                    name: 'C',
                    rate: 90,
                },
                {
                    name: 'DART /FLUTTER',
                    rate: 60,
                },
                {
                    name: 'HTML / CSS',
                    rate: 80,
                },
                {
                    name: 'JS / NODE.JS',
                    rate: 85,
                },
                {
                    name: 'UNIX / SHELL',
                    rate: 90,
                },
                {
                    name: 'VUE.JS',
                    rate: 70,
                },

            ]
        }
    }
}
</script>

<style scoped>
    /* Phone */
    /* @media only screen and (max-width: 1024px) {
        .skills {
            width: 100%;
        }
    } */

    .skills {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
        padding: 8% 10% 8% 10%;
    }

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

    .title {
        align-self: center;
    }
</style>