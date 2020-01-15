<template>
    <div v-bind:id="experience.date + id" class="detail" :class="index % 2 === 0 ? 'leftPosition' : 'rightPosition'">
        <span v-if="index % 2 === 0 && id === 'right'" class="date" :class="index % 2 === 0 ? 'rightPosition' : 'leftPosition'">{{experience.date}}</span>
        <span v-if="index % 2 === 1 && id === 'left'" class="date" :class="index % 2 === 0 ? 'rightPosition' : 'leftPosition'">{{experience.date}}</span>
        <div  class="containerDetail" v-if="index % 2 === 0 && id === 'left' || index % 2 === 1 && id === 'right'">
            <span class="company">{{experience.company}}</span>
            <span class="job">{{experience.job}}</span>
            <span class="text">{{experience.description}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienceDetail',
    props: {
        experience: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        id: {
            type: String,
            required: true,
        }
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
            let el = document.getElementById(this.experience.date + this.id);
            const scroll = window.scrollY || window.pageYOffset
            const viewport = {
                top: scroll,
                bottom: scroll + window.innerHeight,
            }

            if (!this.state && el.offsetTop > viewport.top && el.offsetTop < viewport.bottom
                    && el.offsetTop - viewport.top < window.innerHeight / 1.4) {
                this.state = !this.state;
                el.classList.add('transitionOpacity');
                return true;
            }
            return false;
        }
    }

}
</script>

<style scoped>

.date {
    font-family: 'Roboto';
    color: orange;
    font-weight: 400;
    font-size: 14px;
}

.containerDetail {
    display: flex;
    flex-direction: column;
}

.detail {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    opacity: 0;
    margin-bottom: 50px;
}

.company {
    font-size: 1.4em;
    font-weight: 400;
    line-height: 0.9em;
}

.job {
    font-size: 2em;
    font-weight: 400;
    padding-bottom: 5%;
}

.leftPosition {
    text-align: right;
}

.rightPosition {
    text-align: left;
}

.transitionOpacity {
    animation-name: opacityAnimation;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-delay: .4s;
    animation-fill-mode: forwards;
}

@keyframes opacityAnimation {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@media only screen and (max-width: 480px) {
    .text {
        hyphens: auto;
    }
}

</style>