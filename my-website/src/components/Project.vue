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
        <div v-if="selectedType === '42'" class="contentList">
            <p>42 Project</p>
            <span class="description"> {{ descriptions.school }}</span>
        </div>
        <div v-if="selectedType === 'Personnel'" class="contentList">
            <p>Project Personnel</p>
            <span class="description"> {{ descriptions.perso }}</span>
        </div>

    </div>
</template>

<script lang="ts">
    export default ({
        name: 'Project',
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
                            img: null,
                        },
                        {
                            type: '42',
                            name: 'docker',
                            link: 'https://www.google.com',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis nulla illum eum, quos in vero sunt hic mollitia, excepturi odio sequi quasi dolorem nostrum perferendis facilis labore at laboriosam.',
                            img: null,
                        },
                        {
                            type: 'perso',
                            name: 'flutter',
                            link: 'https://www.google.com',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis nulla illum eum, quos in vero sunt hic mollitia, excepturi odio sequi quasi dolorem nostrum perferendis facilis labore at laboriosam.',
                            img: null,
                        },
                    ],
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

    .type {
        cursor: pointer;
        margin: 15px;
    }

    .activeType {
        color: red;
    }

</style>