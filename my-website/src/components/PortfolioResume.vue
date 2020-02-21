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
            ],
            animationState: false,
        }
    },
    created() {
        document.addEventListener('scroll',this.isInView);
    },
    destroyed() {
        document.romveEventListener('scroll',this.isInView);
    },
    methods: {
        isInView() {
            const elPortfolio = document.getElementsByClassName('portfolio')[0];
            const scroll = window.scrollY || window.pageYOffset
            const viewport = {
                top: scroll,
                bottom: scroll + window.innerHeight,
            }

            if (elPortfolio.offsetHeight <= viewport.top * .7 && !this.animationState) {
                this.animationState = true;
                this.animateProject();
            }
        },
        animateProject() {
            let projects = document.getElementsByClassName('project');
            projects.forEach(project => {
                project.classList.add('animationProject');
                setTimeout(() => {
                    project.classList.replace('animationProject', 'visible');
                }, 1400);
            });
        }
    },
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

    .container:hover .project{
        opacity: .2;
        transition: none;
    }

    .project {
        width: 100%;
        text-align: left;
        padding: 2%;
        opacity: 0;
    }

    .animationProject {
        opacity: 1;
        transition-property: opacity;
        transition-duration: .8s;
        transition-delay: .6s;
        transition-timing-function: ease-in;
    }

    .visible {
        opacity: 1;
        transition: opacity .2s ease-in;
    }
    .container .project:hover {
        transform: scale(1.1);
        transition: all .3s ease-out;
        opacity: 1;
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