<template>
    <div class="time" v-on:scroll="create(index)">
        <div class="leftSide">
            <ExperienceDetail  v-if="index % 2 === 0" :experience="experience" :index="index"></experienceDetail>
        </div>
        <div class="middle">
            <div class="dot" :id="index + '-dot'"></div>
            <div v-if="index != length" class="line" :id="index + '-line'"></div>
        </div>
        <!-- <div v-if="index != length" class="line"  v-bind:id="index + '-line'">
            <div class="dot" v-bind:id="index + '-dot'"></div>
        </div>
        <div v-else class="endLine">
            <div class="dot" v-bind:id="index + '-dot'"></div>
        </div> -->
        <div class="rightSide">
            <ExperienceDetail  v-if="index % 2 === 1" :experience="experience"></experienceDetail>
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
                    && elDot.offsetTop - viewport.top < window.innerHeight / 1.5) {
                this.state = !this.state;
                elDot.classList.add('transitionDot');
                elLine.classList.add('transitionLine');
                return true;
            }
            return false;
        }
    }
}
</script>

<style scoped>
.leftSide, .rightSide {
    width: 49%;
}

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

.middle {
    width: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
}

.dot {
    border-radius: 50%;
    background-color: orange;
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