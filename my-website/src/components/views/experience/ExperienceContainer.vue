<template>
    <div class="time" v-on:scroll="create(index)">
        <div v-if="deviceWidth > 700" class="timeLineView">
            <div class="leftSide">
                <ExperienceDetail :xp="xp" :index="index" :id="'left'" :deviceWidth="deviceWidth"></experienceDetail>
            </div>
            <div class="middleContainer">
                <div class="middle">
                    <div class="dot" :id="index + '-dot'"></div>
                    <div v-if="index != length" class="line" :id="index + '-line'"></div>
                </div>
            </div>
            <div class="rightSide">
                <ExperienceDetail :xp="xp" :index="index" :id="'right'" :deviceWidth="deviceWidth"></experienceDetail>
            </div>
        </div>
        <div v-else class="timeLineViewPhone">
            <div class="middleContainer">
                <div class="middle">
                    <div class="dot" :id="index + '-dot'"></div>
                    <div v-if="index != length" class="line" :id="index + '-line'"></div>
                </div>
            </div>
            <ExperienceDetail :xp="xp" :index="index" :id="'right'" :deviceWidth="deviceWidth"></experienceDetail>
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
        xp: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            state: false,
            deviceWidth: window.innerWidth,
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
            let elLine;
            if (this.index < this.length) {
                elLine = document.getElementById(this.index + '-line');
            }
            const scroll = window.scrollY || window.pageYOffset
            const viewport = {
                top: scroll,
                bottom: scroll + window.innerHeight,
            }

            if (!this.state && elDot.offsetTop > viewport.top && elDot.offsetTop < viewport.bottom
                    && elDot.offsetTop - viewport.top < window.innerHeight / 1.4) {
                
                elDot.classList.add('transitionDot');
                if (this.index < this.length) {
                    elLine.classList.add('transitionLine');
                }
                this.state = !this.state;
                return true;
            }
            return false;
        }
    }
}
</script>

<style scoped>
    .dot {
        border-radius: 50%;
        background-color: orange;
    }

    .leftSide, .rightSide {
        display: flex;
    }

    .line {
        width: 1px;
        margin-left: 5%;
        margin-right: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: orange;
    }

    .middle {
        width: 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .middleContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .time {
        display: flex;
        flex-direction: row;
    }

    .timeLineView {
        width: 100vw;
        display: flex;
    }

    .timeLineViewPhone {
        display: grid;
        grid-template-columns: 10% 90%; 
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
            height: 17px;
            width: 17px;
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

    /* Web */
    @media only screen and (min-width: 700px) {

        .leftSide, .rightSide {
            width: 46%;
        }

        .middleContainer {
            width: 8%;
        }
    }

    /* Phone */
    @media only screen and (max-width: 700px) {
        .leftSide {
            width: 20%;
        }

        .middleContainer {
            width: 12%;
        }
    }
</style>