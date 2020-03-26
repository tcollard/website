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
                    link: 'https://github.com/tcollard/fluttterSoundApp',
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

          if (window.innerWidth > 480) {
            if (elPortfolio.offsetHeight <= viewport.top * .7 && !this.animationState) {
                this.animationState = true;
                this.animateProject();
            }
          } else {
            if (elPortfolio.offsetHeight <= viewport.top && !this.animationState) {
                this.animationState = true;
                this.animateProject();
            }
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


    .htmlText >>> .link {
        text-decoration: none;
        color: white;
    }

    .link {
        text-decoration: none;
        color: white;
    }

    .portfolio {
        text-align: center;
        padding: 8% 20% 8% 20%;
    }

    .separator {
        height: 1px;
        width: 100%;
        background-color: orange;
    }

    .title {
        color: orange;
    }

    /* Web */
    @media only screen and (min-width: 700px) {
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

        .container .project:hover {
            transform: scale(1.1);
            transition: all .3s ease-out;
            opacity: 1;
        }

        .project {
            width: 100%;
            text-align: left;
            padding: 2%;
            opacity: 0;
        }
    }

    /* Phone */
    @media only screen and (max-width: 700px) {
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .project {
            width: 100%;
            text-align: left;
            padding: 10%;
            opacity: 0;
        }
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
</style>