<template>
    <div class="nav-bar">
        <span class="ref">CV</span>
        <a href="#description" id="descriptionNav">HOME</a>
        <a href="#skills" id="skillsNav">SKILLS</a>
        <a href="#portfolio" id="portfolioNav">PORTFOLIO</a>
        <a href="#experience" id="experienceNav">EXPERIENCE</a>
        <a href="#contact" id="contactNav">CONTACT</a>
    </div>
</template>

<script lang="ts">
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
                selectedElem: null,
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
                let elToChannge = document.getElementById(this.visibleId + 'Nav');
                for (let index = 0; index < this.allEl.length; index++) {
                    let el = document.getElementById(this.allEl[index] + 'Nav');
                    if (el.classList.contains('changeColor')) {
                        el.classList.remove('changeColor');
                    }
                }
                elToChannge.classList.add('changeColor');
            }
        }
    }
</script>

<style scoped>
    .nav-bar {
        height: 60px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        font-size: 18px;
    }

    .ref {
        cursor: pointer;
    }

    a {
        cursor: pointer;
        color: orange;
        text-decoration-line: none;
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
</style>