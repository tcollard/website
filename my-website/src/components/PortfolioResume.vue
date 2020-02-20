<template>
    <div class="portfolio">
        <h2>{{ $t('portfolio.title') }}</h2>
        <div class="container">
            <div class="project" v-for="(project, index) in projects" :key="index">
                <a class="link" :href="project.link" target="_blank" rel="noopener">
                    <h3 class="title">{{ $t('portfolio.project.' + project.id + '.title') }}</h3>
                    <div class="separator"></div>
                    <span class="htmlText" v-html="$t('portfolio.project.' + project.id + '.content')"></span>
                </a>
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

    h3 {
        padding-bottom: 0;
    }

    .separator {
        height: 2px;
        width: 100%;
        background-color: orange;
    }

    .portfolio {
        text-align: center;
        padding: 8% 20% 8% 20%;
    }


    .container {
        display: grid;
        grid-template-columns: 45% 45%; 
        justify-items: center;
        grid-gap: 10% 10%;
    }

    .project {
        width: 100%;
        text-align: left;
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