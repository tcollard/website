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
                    img: require('../assets/term.gif'),
                    description: '<p class="text">Réalisation d\'un interpréteur de commande UNIX tel bash</p>',
                    link: 'https://github.com/tcollard/42sh',
                },
                {
                    title: 'IOTA',
                    img: require('../assets/term.gif'),
                    description: '<p class="text">PoC d\'une smart grid utilisant le tangle IOTA, et réalisant des micro-transactions entre différents acteurs</p>',
                    link: 'https://github.com/tcollard/Smart_Grid_IOTA',
                },
                {
                    title: 'GAME JAM',
                    img: require('../assets/term.gif'),
                    description: '<p class="text">Réalisation d\'un jeux lors de la gloabal game jam, avec <a class="link" href="https://francoiscorbel.com/" target="_blank">Francçois Corbel (Dev / Game Designer)</a>, <a class="link" href="http://www.luciencoycault.fr/" target="_blank">Lucien Coycault (Graphic Designer)</a>, <a class="link" href="https://soundcloud.com/fed-j" target="_blank">Jeff Guerin (Sound Designer)</a>, et moi même</p>',
                    link: 'https://francoiscorbel.com/night-crawlerz/',
                },
                {
                    title: 'FLUTTER APP',
                    img: require('../assets/term.gif'),
                    description: '<p class="text">Application permettant de jouer des sons, ainsi que d\'en enregistrer</p>',
                    link: 'https://github.com/tcollard/mySoundApp',
                },
            ]
        }
    }
}
</script>

<style scoped>
.portfolio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 8% 10% 8% 10%;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    align-items: center;
}

.project {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    border-radius: 10px;
    background-color: rgb(51, 59, 80);
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

.htmlText >>> .text {
    font-family: 'Roboto';
    font-size: 1em;
    line-height: 24px;
    font-weight: 300;
}

</style>