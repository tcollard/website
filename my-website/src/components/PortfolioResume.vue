<template>
    <div class="portfolio">
        <h1>Portfolio</h1>
        <div class="container">
            <div class="project" v-for="(project, index) in projects" :key="index">
                <div class="title">{{project.title}}</div>
                <span class="htmlText" v-html="project.description"></span>
                <a class="link text" :href="project.link" target="_blank">Lien</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioResume',
    data() {
        return {
            projects: [
                {
                    title: '42SH',
                    // img: require('../assets/terminal.png'),
                    description: '<p class="text">Réalisation d\'un interpréteur de commande UNIX tel bash</p>',
                    link: 'https://github.com/tcollard/42sh',
                },
                {
                    title: 'IOTA',
                    // img: require('../assets/term.gif'),
                    description: '<p class="text">PoC d\'une smart grid utilisant le tangle IOTA, et réalisant des micro-transactions entre différents acteurs</p>',
                    link: 'https://github.com/tcollard/Smart_Grid_IOTA',
                },
                {
                    title: 'GAME JAM',
                    // img: require('../assets/term.gif'),
                    description: '<p class="text">Réalisation d\'un jeux lors de la gloabal game jam, avec <a class="link" href="https://francoiscorbel.com/" target="_blank">Francçois Corbel (Dev / Game Designer)</a>, <a class="link" href="http://www.luciencoycault.fr/" target="_blank">Lucien Coycault (Graphic Designer)</a>, <a class="link" href="https://soundcloud.com/fed-j" target="_blank">Jeff Guerin (Sound Designer)</a>, et moi même</p>',
                    link: 'https://francoiscorbel.com/night-crawlerz/',
                },
                {
                    title: 'FLUTTER APP',
                    // img: require('../assets/term.gif'),
                    description: '<p class="text">Application permettant de jouer des sons, ainsi que d\'en enregistrer</p>',
                    link: 'https://github.com/tcollard/mySoundApp',
                },
            ]
        }
    }
}
</script>

<style scoped>
/* Web */
@media only screen and (min-width: 480px) {
    .portfolio {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 8% 10% 8% 10%;
    }
}

/* Phone */
@media only screen and (max-width: 480px) {
    .portfolio {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 8% 10% 8% 10%;
        width: 100%;
    }
}


.container {
    display: grid;
    grid-template-columns: 45% 45%; 
    justify-items: center;
    grid-gap: 10% 10%;
}

.project {
    width: 100%;
    text-align: center;
    padding: 2%;
}

.title {
    color: orange;
}

.img {
    width: 100%;
    height: 100%;
}

.link {
    text-decoration: none;
    color: white;
}

.htmlText >>> .link {
    text-decoration: none;
    color: white;
}

</style>