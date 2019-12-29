<template>
    <div>
        <span class="introText">
            <h1>ABOUT</h1>
            <p>Thibault Collard étudiant @ 42 depuis 2017</p>
        </span>
        <span class="link">
            <a class="contentText" href="https://fr.linkedin.com/in/thibault-collard-b8228168" target="_blank">
                <img id="imgLinkedIn" src="../assets/linkedIn.svg" alt="linkedIn">
            </a>
            <a class="contentText" href="https://github.com/tcollard" target="_blank">
                <img id="imgGithub" src="../assets/github.png" alt="github">
            </a>
        </span>

        <br>
        <h2 class="title">Expérience Professionnelle</h2>
        <hr>
        <span class="experienceBlock">
            <p class="subtitle">2019 - Développeur Full Stack</p>
            <p class="duration">6 mois - Internship</p>
            <span>
                Au sein de la startup
                <a class="contentText" href="https://neocity.fr/" target="_blank">Neocity</a>,
                spécialisée dans les applications mobiles pour les villes.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim perferendis optio molestias reprehenderit error inventore recusandae voluptas! Atque nemo suscipit reprehenderit quasi. Aperiam ratione a culpa amet rem suscipit ipsa!
            </span>
        </span>
    </div>
</template>

<script lang="ts">
    export default ({
        name: 'About',
    })
</script>

<style scoped>
.contentText {
    text-decoration: none;
    color: black;
}

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
    justify-content: space-evenly;
}

.title {
    text-align: center;
    font-size: 1.5em;
    margin: 0;
}

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

#imgLinkedIn {
    width: 7%;
}

#imgGithub {
    width: 40%;
}

</style>