<template>
    <div class="time" v-on:scroll="create(index)">
        <div class="leftSide">
            <ExperienceDetail  v-if="index % 2 === 0" :experience="experience" :index="index"></experienceDetail>
        </div>
        <div v-if="index != length" class="line"  v-bind:id="index + '-line'">
            <div class="dot" v-bind:id="index + '-dot'"></div>
        </div>
        <div v-else class="endLine">
            <div class="dot" v-bind:id="index + '-dot'"></div>
        </div>
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
            const scroll = window.scrollY || window.pageYOffset
            const viewport = {
                top: scroll,
                bottom: scroll + window.innerHeight,
            }

            if (!this.state && elDot.offsetTop > viewport.top && elDot.offsetTop < viewport.bottom) {
                this.state = !this.state;
                // elDot.style.opacity = 1;
                // elDot.style.visibility = 'hidden';
                elDot.classList.add('transitionDot');
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
    background-color: orange;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.endLine {
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
    animation-delay: .3s;
    animation-fill-mode: forwards;
}

.transitionLine {
    animation-name: lineTransition;
    animation-duration: .8s;
    animation-timing-function: ease-in;
    animation-delay: 0
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
        opacity: 0;
    }
}
</style>