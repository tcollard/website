<template>
    <div>
        <span class="introText">
            <h1>A propos</h1>
            <p>Thibault Collard étudiant @ 42 depuis 2017</p>
        </span>
        <div class="link">
            <a class="contentText" href="https://fr.linkedin.com/in/thibault-collard-b8228168" target="_blank">
                <img class="img" src="../assets/linkedIn.svg" alt="linkedIn">
            </a>
            <a class="contentText" href="https://github.com/tcollard" target="_blank">
                <img class="img" src="../assets/github.svg" alt="github">
            </a>
        </div>

        <br>
        <h2 class="title">Expérience Professionnelle</h2>
        <hr>
        <ul>
            <Experience v-for="(xp, index) in experiences" :experience="xp" :key="index"></Experience>
        </ul>
    </div>
</template>

<script lang="ts">
    import Experience from './Experience.vue';

    export default ({
        name: 'About',
        components: {
            Experience,
        },
        data() {
            return {
                experiences: [
                    {
                        date: '2019',
                        poste: 'Développeur Full Stack',
                        during: '6 mois',
                        type: 'Intership',
                        content: `Au sein de la startup
                            <a class="contentText" href="https://neocity.fr/" target="_blank">Neocity</a>
                            spécialisée dans les applications mobiles pour les villes.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim perferendis optio molestias reprehenderit error inventore recusandae voluptas! Atque nemo suscipit reprehenderit quasi. Aperiam ratione a culpa amet rem suscipit ipsa!`,
                    },
                    {
                        date: '2020',
                        poste: ' TEST Développeur Full Stack',
                        during: '16 mois',
                        type: 'CDI',
                        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },  
                ],
            };
        },
    })
</script>

<style scoped>

    .introText {
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .link {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .title {
        text-align: center;
        font-size: 1.5em;
        margin: 0;
    }

    .img {
        width: 42px;
        margin: 10px;
    }
    /* #imgLinkedIn {
        width: 7%;
    }

    #imgGithub {
        width: 40%;
    } */

</style>