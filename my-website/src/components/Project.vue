<template>
    <div>
        <h1>PROJECT</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis nulla illum eum, quos in vero sunt hic mollitia, excepturi odio sequi quasi dolorem nostrum perferendis facilis labore at laboriosam.
        </p>
        <div class="typeContainer">
            <span class="type"
                :class="{ activeType: selectedType === type }"
                v-for="type in types"
                @click="selectedType = type"
                :key="type"
            >{{ type }}</span>
        </div>
        <div v-show="selectedType === '42'" class="contentList">
            <p class="contentListTitle">42 Project</p>
            <span class="description"> {{ descriptions.school }}</span>
            <div v-for="(project, index) in projects"
                :key="index" v-show="project.type === '42'"
                @click="project.state = (project.state === 'close') ? 'open' : 'close'"
                class="projectTitle">
                <p class="foldTitle">{{ project.name }}</p>
                <transition name="slide-fade">
                    <ProjectDetail v-show="project.state === 'open'" :detail="project"></ProjectDetail>
                </transition>
            </div>
        </div>
        <div v-if="selectedType === 'Personnel'" class="contentList">
            <p>Project Personnel</p>
            <span class="description"> {{ descriptions.perso }}</span>
        </div>

    </div>
</template>

<script lang="ts">
    import ProjectDetail from './ProjectDetail.vue';

    export default ({
        name: 'Project',
        components: {
            ProjectDetail,
        },
        data() {
            return {
                types: ['42', 'Personnel'],
                selectedType: '42',
                projects: [
                        {
                            type: '42',
                            name: '42sh',
                            link: 'https://www.google.com',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis nulla illum eum, quos in vero sunt hic mollitia, excepturi odio sequi quasi dolorem nostrum perferendis facilis labore at laboriosam.',
                            img: '../assets/projects/42sh.png',
                            state: 'close',
                        },
                        {
                            type: '42',
                            name: 'Truc',
                            link: 'https://www.google.com',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis nulla illum eum, quos in vero sunt hic mollitia, excepturi odio sequi quasi dolorem nostrum perferendis facilis labore at laboriosam.',
                            img: '../assets/projects/42sh.png',
                            state: 'close',
                        },
                        {
                            type: '42',
                            name: 'docker',
                            link: 'https://www.google.com',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis nulla illum eum, quos in vero sunt hic mollitia, excepturi odio sequi quasi dolorem nostrum perferendis facilis labore at laboriosam.',
                            img: null,
                            state: 'close',
                        },
                        {
                            type: 'perso',
                            name: 'flutter',
                            link: 'https://www.google.com',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis nulla illum eum, quos in vero sunt hic mollitia, excepturi odio sequi quasi dolorem nostrum perferendis facilis labore at laboriosam.',
                            img: null,
                            state: 'close',
                        },
                    ],
                // selectedProject: null,
                descriptions: {
                    school: 'Projets réaliser dans ma formation à 42.',
                    perso: 'Projets personnelles, afin de decouvrir de nouveaux languages et de nouvelles technologies.',
                }
            };
        },
    })
</script>

<style scoped>

    .typeContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .contentList {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contentListTitle {
        /* font-weight: bold; */
    }

    .projectTitle {
        border: 1px solid grey;
        border-radius: 10px;
        width: 50%;
        height: 10%;
        margin-bottom: 8px;
        text-align: center;
    }
    .type {
        cursor: pointer;
        margin: 15px;
        font-weight: bold;
    }

    .activeType {
        color: red;
    }

    .foldTitle {
        cursor: pointer;
        margin: 2px;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave {
        transform: translateY(-20px);
        opacity: 0;
    } 
</style>