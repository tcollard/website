<template>
    <div class="time" v-on:scroll="create(index)">
        <div class="leftSide">
            <ExperienceDetail :experience="experience" :index="index" :id="'left'"></experienceDetail>
        </div>
        <div class="middleContainer">
            <div class="middle">
                <div class="dot" :id="index + '-dot'"></div>
                <div v-if="index != length" class="line" :id="index + '-line'"></div>
            </div>
        </div>
        <div class="rightSide">
            <ExperienceDetail :experience="experience" :index="index" :id="'right'"></experienceDetail>
        </div>
    </div>
</template>

<script>
import ExperienceDetail from './ExperienceDetail.vue';

export default {
    name: "ExperienceContainer",
    components: {
        ExperienceDetail,
    },
    props: {
        index: {
            type: Number,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        },
        experience: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            state: false,
        }
    },
    created() {
        document.addEventListener('scroll', this.isInView);
    },
    destroyed() {
        document.removeEventListener('scroll', this.isInView);
    },

    methods: {
        isInView() {
            let elDot = document.getElementById(this.index + '-dot');
            let elLine = document.getElementById(this.index + '-line');
            const scroll = window.scrollY || window.pageYOffset
            const viewport = {
                top: scroll,
                bottom: scroll + window.innerHeight,
            }

            if (!this.state && elDot.offsetTop > viewport.top && elDot.offsetTop < viewport.bottom
                    && elDot.offsetTop - viewport.top < window.innerHeight / 1.4) {
                
                elDot.classList.add('transitionDot');
                elLine.classList.add('transitionLine');
                this.state = !this.state;
                return true;
            }
            return false;
        }
    }
}
</script>

<style scoped>

.time {
    display: flex;
    flex-direction: row;
}

.line {
    width: 2px;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: orange;
}

.endLine {
    width: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
}

.date {
    font-family: 'Roboto';
    color: orange;
    font-weight: 400;
    font-size: 1.2em;
    padding-bottom: 2%;
}

.left {
    text-align: right;
}

.right {
    text-align: left;
}

/* Web */
@media only screen and (min-width: 480px) {

    .middleContainer {
        width: 8%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .middle {
        width: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .leftSide, .rightSide {
        width: 46%;
        display: flex;
    }
}

/* Phone */
@media only screen and (max-width: 480px) {
    .middleContainer {
        width: 12%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .middle {
        width: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .leftSide, .rightSide {
        width: 44%;
        display: flex;
    }
}

.dot {
    border-radius: 50%;
    background-color: orange;
}

.paused {
    animation-play-state: paused;
}

.start {
    animation-play-state: running;
}

.transitionDot {
    animation-name: dotTransition;
    animation-duration: .3s;
    animation-timing-function: ease-in;
    animation-delay: .6s;
    animation-fill-mode: forwards;
}

.transitionLine {
    animation-name: lineTransition;
    animation-duration: .8s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;
}

@keyframes dotTransition {
    from {
        height: 2px;
        width: 2px;
    }
    to {
        height: 20px;
        width: 20px;
    }
}

@keyframes lineTransition {
    from {
        height: 0px;
    }
    to {
        height: 100%;
    }
}
</style>