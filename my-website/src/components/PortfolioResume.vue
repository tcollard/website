<template>
    <div class="portfolio">
        <h1>Portfolio</h1>
        <div class="container">
            <div class="project" v-for="(project, index) in projects" :key="index">
                <div class="content">{{project.title}}</div>
                <span class="text">{{project.description}}</span>
                <a :href="project.link" target="_blank">Lien</a>
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
                    description: 'Réalisation d\'un interpréteur de commande UNIX tel bash',
                    link: 'https://github.com/tcollard/42sh',
                },
                {
                    title: 'IOTA',
                    img: require('../assets/term.gif'),
                    description: 'Poc d\'une smart grid utilisant le tangle IOTA, et réalisant des micro-transactions entre différents acteurs',
                    link: 'https://github.com/tcollard/Smart_Grid_IOTA',
                },
                {
                    title: 'GAME JAM',
                    img: require('../assets/term.gif'),
                    description: 'Réalisation d\'un jeux lors de la gloabal game jam, avec Francçois Corbel (Dev / Game Designer), Lucien Coycault (Graphic Designer), Jeff Guerin (Sound Designer), et moi même',
                    link: 'https://francoiscorbel.com/night-crawlerz/',
                },
                {
                    title: 'FLUTTER APP',
                    img: require('../assets/term.gif'),
                    description: 'Application permettant de jouer des sons, ainsi que d\'en enregistrer',
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
}

.project {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    border: 2px solid white;
    border-radius: 50px;
}

</style>