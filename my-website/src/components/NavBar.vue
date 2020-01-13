<template>
    <div>
        <div class="nav-bar-web">
            <span class="ref">CV</span>
            <a class="ref" href="#description" id="descriptionNav">HOME</a>
            <a class="ref" href="#skills" id="skillsNav">SKILLS</a>
            <a class="ref" href="#portfolio" id="portfolioNav">PORTFOLIO</a>
            <a class="ref" href="#experience" id="experienceNav">EXPERIENCE</a>
            <a class="ref" href="#contact" id="contactNav">CONTACT</a>
        </div>
        <div class="nav-bar-phone">
            <div class="menuIcon" @click="changeIcon">
                <div id="top" class="bar"></div>
                <div id="middle1" class="bar"></div>
                <div id="middle2" class="bar"></div>
                <div id="bottom" class="bar"></div>
            </div>
        </div>
        <div class="listItems">
            <span class="menuTitle" @click="changeIcon">CV</span>
            <a class="menuTitle" @click="changeIcon" href="#description" id="descriptionPhone">HOME</a>
            <a class="menuTitle" @click="changeIcon" href="#skills" id="skillsPhone">SKILLS</a>
            <a class="menuTitle" @click="changeIcon" href="#portfolio" id="portfolioPhone">PORTFOLIO</a>
            <a class="menuTitle" @click="changeIcon" href="#experience" id="experiencePhone">EXPERIENCE</a>
            <a class="menuTitle" @click="changeIcon" href="#contact" id="contactPhone">CONTACT</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
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
                if (this.iconPos === 'init') {
                    this.iconPos = 'cross';
                    elMiddle1.classList.add('middle1ToCross');
                    elMiddle2.classList.add('middle2ToCross');
                    elTop.classList.add('hideBar');
                    elBottom.classList.add('hideBar');
                    elList.classList.add('open');
                    elNav.classList.add('fullScreen');
                    document.body.style.position = 'fixed';
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
                    elMiddle1.classList.add('middle1ToInit');
                    elMiddle2.classList.add('middle2ToInit');
                    elTop.classList.add('showBar');
                    elBottom.classList.add('showBar');
                    elNav.classList.add('initNav');
                    elList.classList.add('close');
                    document.body.style.position = '';
                }
            },
        }
    }
</script>

<style scoped>

.ref {
    cursor: pointer;
}

a {
    color: orange;
    text-decoration-line: none;
}

.listItems {
    display: none;
    flex-direction: column;
    z-index: 100;
    font-size: 3em;
    width: 100%;
    align-items: center;
}

.changeColor {
    animation-name: newColor;
    animation-duration: .5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    color: white !important;
}

@keyframes newColor {
    from {
        color: orange;
    }
    to {
        color: white;
    }
}

@media only screen and (min-width: 480px) {
    .nav-bar-web {
        height: 60px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        font-size: 1em;
    }

    .nav-bar-phone {
        display: none;
    }

    
}

@media only screen and (max-width: 480px) {
    .nav-bar-web {
        display: none;
    }

    .nav-bar-phone {
        height: 60px;
        /* margin-bottom: 15px; */
        display: flex;
        flex-direction: row-reverse;
        padding-right: 25px;
        align-items: center;
    }

    .menuIcon {
        width: 10%;
        height: 45px;
        position: relative;
        cursor: pointer;
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

    .open {
        display: flex;
    }

    .close {
        display: none;
    }

    .ref {
        margin-bottom: 10%;
    }

    #top {
        top: 22%;
    }

    #middle1, #middle2 {
        top: 50%;
    }

    #bottom {
        top: 78%;
    }

    #top.open {
        top: 18px;
        width: 0%;
        left: 50%;
    }

    .middle1ToCross {
        animation-name: middle1Cross;
        animation-duration: .3s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
    }

    @keyframes middle1Cross {
        to {
            transform: rotate(45deg);
        }
    }

    .middle1ToInit {
        animation-name: middle1Init;
        animation-duration: .3s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
    }

    @keyframes middle1Init {
        from {
            transform: rotate(45deg);
        }
        to {
            transform: rotate(0deg);
        }
    }

    .middle2ToCross {
        animation-name: middle2Cross;
        animation-duration: .3s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
    }

    @keyframes middle2Cross {
        to {
            transform: rotate(-45deg);
        }
    }

    .middle2ToInit {
        animation-name: middle2Init;
        animation-duration: .3s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
    }

    @keyframes middle2Init {
        from {
            transform: rotate(-45deg)
        }
        to {
            transform: rotate(0deg);
        }
    }

    .hideBar {
        animation-name: hideAnimation;
        animation-duration: .5s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
    }

    @keyframes hideAnimation {
        to {
            opacity: 0;
        }
    }

    .showBar {
        animation-name: showAnimation;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
    }

    @keyframes showAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .menuTitle {
        font-size: 1em;
        font-weight: bold;
    }

    .fullScreen {
        height: 100%;
        /* scroll-behavior: unset; */
    }

    .initNav {
        height: 60px;
    }

}
</style>