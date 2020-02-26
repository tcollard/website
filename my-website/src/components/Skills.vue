<template>
    <div class="skills">
        <h2>{{ $t('navBar.skills') }}</h2>
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
                    rate: 65,
                },
                {
                    name: 'C',
                    rate: 80,
                },
                {
                    name: 'DART /FLUTTER',
                    rate: 60,
                },
                {
                    name: 'HTML / CSS',
                    rate: 75,
                },
                {
                    name: 'JS / NODE.JS',
                    rate: 70,
                },
                {
                    name: 'UNIX / SHELL',
                    rate: 80,
                },
                {
                    name: 'VUE.JS',
                    rate: 65,
                },

            ]
        }
    }
}
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