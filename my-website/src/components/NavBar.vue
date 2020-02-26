<template>
    <div>
        <div class="nav-bar-web">
            <a class="ref" @click="downloadCV">CV</a>
            <a class="ref" href="#description" id="descriptionNav">{{ $t('navBar.about') }}</a>
            <a class="ref" href="#skills" id="skillsNav">{{ $t('navBar.skills') }}</a>
            <a class="ref" href="#portfolio" id="portfolioNav">{{ $t('navBar.portfolio') }}</a>
            <a class="ref" href="#experience" id="experienceNav">{{ $t('navBar.experience') }}</a>
            <a class="ref" href="#contact" id="contactNav">{{ $t('navBar.contact') }}</a>
        </div>
        <div class="nav-bar-phone">
            <LanguageSwitcher  v-if="deviceWidth <= 700" class="lang"></LanguageSwitcher>
            <div class="menuIcon" @click="changeIcon">
                <div id="top" class="bar"></div>
                <div id="middle1" class="bar"></div>
                <div id="middle2" class="bar"></div>
                <div id="bottom" class="bar"></div>
            </div>
        </div>
        <div class="listItems" @click="changeIcon">
            <a class="menuTitle" href="#description" id="descriptionPhone">{{ $t('navBar.about') }}</a>
            <a class="menuTitle" href="#skills" id="skillsPhone">{{ $t('navBar.skills') }}</a>
            <a class="menuTitle" href="#portfolio" id="portfolioPhone">{{ $t('navBar.portfolio') }}</a>
            <a class="menuTitle" href="#experience" id="experiencePhone">{{ $t('navBar.experience') }}</a>
            <a class="menuTitle" href="#contact" id="contactPhone">{{ $t('navBar.contact') }}</a>
            <a class="menuTitle" @click="downloadCV">CV</a>
        </div>
        <div v-if="this.downloading" class="download">
            <h1 class="question">{{ $t('download.question') }}</h1>
            <div class="answer">
                <a class="answerText" @click="downloadCV" href="https://github.com/tcollard/CV/raw/master/THIBAULT%20COLLARD.pdf" download>{{ $t('utils.yes') }}</a>
                <div class="answerText" @click="downloadCV">{{ $t('utils.no') }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import LanguageSwitcher from './Language.vue';

    export default {
        name: 'NavBar',
        components: {
            LanguageSwitcher,
        },
        props: {
            visibleId: {
                type: String,
                required: false,
            },
            allEl: {
                type: Array,
                required: true,
            }
        },
        data() {
            return {
                iconPos: 'init',
                downloading: false,
                deviceWidth: window.innerWidth,
            };
        },
        created() {
            document.addEventListener('scroll', this.isInView);
        },
        destroyed() {
            document.removeEventListener('scroll', this.isInView);
        },
        methods: {
            isInView() {
                let elToChanngeNav = document.getElementById(this.visibleId + 'Nav');
                let elToChanngePhone = document.getElementById(this.visibleId + 'Phone');
                for (let index = 0; index < this.allEl.length; index++) {
                    let elNav = document.getElementById(this.allEl[index] + 'Nav');
                    let elPhone = document.getElementById(this.allEl[index] + 'Phone');
                    if (elNav.classList.contains('changeColor')) {
                        elNav.classList.remove('changeColor');
                    }
                    if (elPhone.classList.contains('changeColor')) {
                        elPhone.classList.remove('changeColor');
                    }

                }
                elToChanngeNav.classList.add('changeColor');
                elToChanngePhone.classList.add('changeColor');
            },
            changeIcon() {
                let elTop = document.getElementById('top');
                let elMiddle1 = document.getElementById('middle1');
                let elMiddle2 = document.getElementById('middle2');
                let elBottom = document.getElementById('bottom');
                let elList = document.getElementsByClassName('listItems')[0];
                let elNav = document.getElementById('navbar');
                let componentArray = document.getElementsByClassName('component');

                if (this.iconPos === 'init') {
                    this.iconPos = 'cross';
                    elMiddle1.classList.add('middle1ToCross');
                    elMiddle2.classList.add('middle2ToCross');
                    elTop.classList.add('hideBar');
                    elBottom.classList.add('hideBar');
                    elList.classList.add('open');
                    elNav.classList.add('fullScreen');
                    
                    document.body.style.overflowY = 'hidden';
                    componentArray.forEach(comp => {
                        comp.style.visibility = 'hidden';
                    });

                    if (elMiddle1.classList.contains('middle1ToInit')) {
                        elMiddle1.classList.remove('middle1ToInit');
                        elMiddle2.classList.remove('middle2ToInit');
                        elTop.classList.remove('showBar');
                        elBottom.classList.remove('showBar');
                        elList.classList.remove('close');
                        elNav.classList.remove('initNav');
                    }
                } else {
                    this.iconPos = 'init';
                    elMiddle1.classList.remove('middle1ToCross');
                    elMiddle2.classList.remove('middle2ToCross');
                    elTop.classList.remove('showBar');
                    elBottom.classList.remove('showBar');
                    elNav.classList.remove('fullScreen');
                    elList.classList.remove('open');
                    document.body.style.overflowY = '';

                    componentArray.forEach(comp => {
                        comp.style.visibility = '';
                    });

                    elMiddle1.classList.add('middle1ToInit');
                    elMiddle2.classList.add('middle2ToInit');
                    elTop.classList.add('showBar');
                    elBottom.classList.add('showBar');
                    elNav.classList.add('initNav');
                    elList.classList.add('close');
                    window.onscroll = () => {};
                }
            },
            downloadCV() {
                this.downloading = !this.downloading;
                setTimeout(() => {
                    document.body.style.overflowY = (this.downloading) ? 'hidden' : '';
                });
            }
        }
    }
</script>

<style scoped>
    a {
        color: orange;
        text-decoration: none;
    }

    .answer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    .answerText {
        font-family: 'Roboto Slab';
        font-size: 0.6em;
        text-align: center;
        font-weight: bold;
        border-radius: 10px;
        padding: 1%;
        background-color: orange;
        margin: 2%;
        min-width: 8%;
        cursor: pointer;
        color: white;
    }

    .changeColor {
        animation-name: newColor;
        animation-duration: .5s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        color: white !important;
    }

    .download {
        background-color: rgba(0, 0, 0, .7);
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 3em;
    }

    .listItems {
        display: none;
        flex-direction: column;
        font-size: 3em;
        height: calc(100vh - 60px);
        width: 100vw;
        overflow-y: scroll;
    }

    .lang {
      color: orange;
      align-self: flex-end;
      padding-right: 8%; 
    }

    .question {
        font-size: 1em;
        line-height: auto;
        margin-bottom: 5%;
        text-align: center;
    }

    .ref {
        cursor: pointer;
    }

    @keyframes newColor {
        from {
            color: orange;
        }
        to {
            color: white;
        }
    }

    @media only screen and (min-width: 1024px) {
        .nav-bar-phone {
            display: none;
        }

        .nav-bar-web {
            height: 60px;
            margin-bottom: 15px;
            margin-top: 15px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            font-size: 1em;
        }
    }

    @media only screen and (max-width: 1024px) {
        #bottom {
            top: 78%;
        }

        #middle1, #middle2 {
            top: 50%;
        }

        #top {
            top: 22%;
        }

        #top.open {
            top: 18px;
            width: 0%;
            left: 50%;
        }

        .close {
            display: none;
        }

        .bar {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            background: white;
            border-radius: 9px;
            opacity: 1;
            left: 0;
        }

        .fullScreen {
            height: 100%;
        }

        .hideBar {
            animation-name: hideAnimation;
            animation-duration: .5s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in-out;
        }

        .initNav {
            height: 60px;
        }

        .menuIcon {
            width: 2em;
            height: 2.5em;
            position: relative;
            cursor: pointer;
        }

        .menuIcon:active {
            -webkit-tap-highlight-color: transparent;
        }

        .menuTitle {
            font-size: 1em;
            font-weight: 400;
            margin-bottom: 5%;
            text-align: center;
        }

        .middle1ToCross {
            animation-name: middle1Cross;
            animation-duration: .3s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in;
        }

        .middle1ToInit {
            animation-name: middle1Init;
            animation-duration: .3s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in;
        }

        .middle2ToCross {
            animation-name: middle2Cross;
            animation-duration: .3s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in;
        }

        .middle2ToInit {
            animation-name: middle2Init;
            animation-duration: .3s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in;
        }

        .nav-bar-phone {
            height: 60px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-right: 25px;
            padding-left: 25px;
            align-items: center;
        }

        .nav-bar-web {
            display: none;
        }

        .open {
            display: flex;
        }

        .ref {
            margin-bottom: 10%;
        }

        .showBar {
            animation-name: showAnimation;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in-out;
        }

        @keyframes hideAnimation {
            to {
                opacity: 0;
            }
        }

        @keyframes middle1Cross {
            to {
                transform: rotate(45deg);
            }
        }

        @keyframes middle1Init {
            from {
                transform: rotate(45deg);
            }
            to {
                transform: rotate(0deg);
            }
        }

        @keyframes middle2Cross {
            to {
                transform: rotate(-45deg);
            }
        }

        @keyframes middle2Init {
            from {
                transform: rotate(-45deg)
            }
            to {
                transform: rotate(0deg);
            }
        }

        @keyframes showAnimation {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }
</style>