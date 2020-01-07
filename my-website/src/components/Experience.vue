<template>
    <div class="experience">
        <h1>Experience</h1>
    </div>
    <!-- <span class="experienceBlock">
        <p class="subtitle">{{ experience.date }} - {{ experience.poste }}</p>
        <p class="duration">{{ experience.during }} - {{ experience.type }}</p>
        <span v-html="experience.content"></span>
    </span> -->
</template>

<script lang="ts">
    export default ({
        name: 'Experience',
        // props: {
        //     experience:{
        //         type: Object,
        //         required: true,
        //     },
        // },
    })
</script>

<style>
    .experience {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-bottom: 10%;
        padding-top: 10%;
    }
    /* .subtitle {
        font-size: 1.17em;
        font-weight: bold;
        margin: 5px;
    }

    .duration {
        font-size: 1.1em;
        font-weight: bold;
        margin: 5px;
    }

    .experienceBlock {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 25px;
    }
    
    .contentText {
        text-decoration: none;
        color: black;
    } */
</style>