<template>
    <div>
        <div class="nav-bar">
                <span class="tabs"
                    :class="{ activeTab: selectedTab === tab }"
                    v-for="tab in tabs"
                    @click="selectedTab = tab"
                    :key="tab"
                >{{ tab }}</span>
        </div>

        <div v-if="selectedTab === 'About'">
            <About></About>
        </div>

        <div v-if="selectedTab === 'Project'">
            <Project></Project>
        </div>
    </div>
</template>

<script lang="ts">
    import Project from './Project.vue';
    import About from './About.vue';

    export default {
        name: 'NavBar',
        components: {
            Project,
            About,
        },
        data() {
            return {
                tabs: ['About', 'Project'],
                selectedTab: 'About',
            };
        },
    }
</script>

<style scoped>
    .nav-bar {
        background: linear-gradient(-90deg, #84CF6A, #16C0B0);
        height: 60px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .tabs {
        font-size: 2em;
        cursor: pointer;
    }

    .activeTab {
        color: red;
        /* text-decoration: underline; */
    }
</style>