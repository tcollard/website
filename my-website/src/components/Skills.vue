<template>
    <div class="skills">
        <h1>Compétences</h1>
        <div class="listSkills">
            <div v-for="skill in skills" :key="skill" class="oneSkill">
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
                    name: 'C',
                    rate: 90,
                },
                                {
                    name: 'UNIX / SHELL',
                    rate: 90,
                },
                {
                    name: 'DART /FLUTTER',
                    rate: 60,
                },
                {
                    name: 'ANGULAR',
                    rate: 70,
                },
                {
                    name: 'VueJS',
                    rate: 70,
                },
                {
                    name: 'HTML / CSS',
                    rate: 80,
                },
                {
                    name: 'JS / NodeJS',
                    rate: 85,
                },

            ]
        }
    }
}
</script>

<style scoped>
.skills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 8% 20% 8% 20%;
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
</style>