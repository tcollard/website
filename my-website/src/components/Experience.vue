<template>
    <span class="experienceBlock">
        <p class="subtitle">{{ xp.date }} - {{ xp.poste }}</p>
        <p class="duration">{{ xp.during }} - {{ xp.type }}</p>
        <span v-html="xp.content"></span>
    </span>
</template>

<script lang="ts">
    export default ({
        name: 'Experience',
        props: {
            xp:{
                type: Array,
                required: true,
            },
        },
    })
</script>

<style>
    .subtitle {
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
        margin: 15px;
    }
    
    .contentText {
        text-decoration: none;
        color: black;
    }
</style>