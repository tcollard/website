<template>
    <div class="portfolio">
        <h1>{{ $t('portfolio.title') }}</h1>
        <div class="container">
            <div class="project" v-for="(project, index) in projects" :key="index">
                <div class="title">{{ $t('portfolio.project.' + project.id + '.title') }}</div>
                <span class="htmlText" v-html="$t('portfolio.project.' + project.id + '.content')"></span>
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
                    id: '42sh',
                    link: 'https://github.com/tcollard/42sh',
                },
                {
                    id: 'iota',
                    link: 'https://github.com/tcollard/Smart_Grid_IOTA',
                },
                {
                    id: 'gameJam',
                    link: 'https://francoiscorbel.com/night-crawlerz/',
                },
                {
                    id: 'flutterApp',
                    link: 'https://github.com/tcollard/mySoundApp',
                },
            ]
        }
    }
}
</script>

<style scoped>

    /* Phone */
    @media only screen and (max-width: 1024px) {
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