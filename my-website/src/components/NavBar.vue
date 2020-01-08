<template>
    <div class="nav-bar">
        <span class="ref">CV</span>
        <a class="ref" v-scroll-to="'#description'">HOME</a>
        <a class="ref" v-scroll-to="'#skills'">SKILLS</a>
        <a class="ref" v-scroll-to="'#experience'">EXPERIENCE</a>
        <a class="ref" v-scroll-to="'#portfolio'">PORTFOLIO</a>
        <a class="ref" v-scroll-to="'#contact'">CONTACT</a>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'NavBar',
    }
</script>

<style scoped>
    .nav-bar {
        /* background: linear-gradient(-90deg, #84CF6A, #16C0B0); */
        height: 60px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .ref {
        cursor: pointer;
        text-decoration: none;
        color: grey;
        font-size: 18px;
    }

</style>