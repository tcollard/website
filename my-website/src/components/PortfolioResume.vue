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
                    description: '<p class="text">Développement d\'un interpréteur de commande UNIX, comme BASH / ZSH</p>',
                    // description: '<p class="text">Bash-like shell It\'s a command-line interpreter</p>',
                    link: 'https://github.com/tcollard/42sh',
                },
                {
                    title: 'Smart Grid / IOTA',
                    description: '<p class="text">PoC d\'une smart grid utilisant le tangle IOTA, et réalisant des micro-transactions entre différents acteurs</p>',
                    // description: '<p class="text">PoC of a smart grid using the IOTA tangle, and performing micro-transactions between different actors.</p>',
                    link: 'https://github.com/tcollard/Smart_Grid_IOTA',
                },
                {
                    title: 'GAME JAM',
                    description: '<p class="text">Création d\'un jeux lors de la gloabal game jam, avec <a class="link" href="https://francoiscorbel.com/" target="_blank">Francçois Corbel (Dev / Game Designer)</a>, <a class="link" href="http://www.luciencoycault.fr/" target="_blank">Lucien Coycault (Graphic Designer)</a>, <a class="link" href="https://soundcloud.com/fed-j" target="_blank">Jeff Guerin (Sound Designer)</a>, et moi même</p>',
                    // description: '<p class="text">Making a game at the gloabal game jam, with <a class="link" href="https://francoiscorbel.com/" target="_blank">Francçois Corbel (Dev / Game Designer)</a>, <a class="link" href="http://www.luciencoycault.fr/" target="_blank">Lucien Coycault (Graphic Designer)</a>, <a class="link" href="https://soundcloud.com/fed-j" target="_blank">Jeff Guerin (Sound Designer)</a>, and myself</p>',
                    link: 'https://francoiscorbel.com/night-crawlerz/',
                },
                {
                    title: 'FLUTTER APP',
                    description: '<p class="text">Projet personnel, pour me familiariser avec l\'environement Flutter.\nRéalisation d\'une application pouvant enregistrer et jouer des sons</p>',
                    // description: '<p class="text">Personal project, familiarize myself with the Flutter environment. Developed an application that can record and play sounds...</p>',
                    link: 'https://github.com/tcollard/mySoundApp',
                },
            ]
        }
    }
}
</script>

<style scoped>

    /* Phone */
    @media only screen and (max-width: 480px) {
        .portfolio {
            width: 100%;
        }
    }

    .portfolio {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 8% 10% 8% 10%;
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