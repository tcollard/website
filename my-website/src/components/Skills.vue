<template>
    <div class="skills">
        <h1>Skills</h1>
        <div v-for="skill in skills" :key="skill" class="listSkills">
            <ProgressBar :skill="skill"></ProgressBar>
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
                    rate: '90',
                },
                                {
                    name: 'UNIX / SHELL',
                    rate: '90',
                },
                {
                    name: 'DART /FLUTTER',
                    rate: '60',
                },
                {
                    name: 'ANGULAR',
                    rate: '70',
                },
                {
                    name: 'VueJs',
                    rate: '70',
                },
                {
                    name: 'HTML / CSS',
                    rate: '80',
                },
                {
                    name: 'JS / NodeJS',
                    rate: '85',
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
    margin-left: 10%;
    margin-right: 10%;
}

.listSkills {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
}
</style>