<template>
    <div v-bind:id="experience.date" class="detail" :class="index % 2 === 0 ? 'leftPosition' : 'rightPosition'">
        <span class="date">{{experience.date}}</span>
        <span class="company">{{experience.company}}</span>
        <span class="job">{{experience.job}}</span>
        <span class="text">{{experience.description}}</span>
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
            let el = document.getElementById(this.experience.date);
            const scroll = window.scrollY || window.pageYOffset
            const viewport = {
                top: scroll,
                bottom: scroll + window.innerHeight,
            }

            if (!this.state && el.offsetTop > viewport.top && el.offsetTop < viewport.bottom
                    && el.offsetTop - viewport.top < window.innerHeight / 1.4) {
                this.state = !this.state;
                // console.log('YOYO') /* eslint-disable-line */
                el.style.opacity = 1;
                if (this.index % 2) { 
                    el.classList.add('transitionLeft')
                } else {
                    el.classList.add('transitionRight');
                }
                return true;
            }
            return false;
        }
    }

}
</script>

<style scoped>
.detail {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    visibility: hidden;
}

.date {
    color: orange;
    font-weight: bold;
    font-size: 1.2em;
    padding-bottom: 2%;
}

.company {
    font-size: 1.4em;
    font-weight: bold;
    padding-bottom: 2%;
    margin-bottom: 5%;
}

.job {
    font-size: 1.2em;
    font-weight: bold;
    padding-bottom: 2%;
}

.leftPosition {
    text-align: right;
}

.rightPosition {
    text-align: left;
}

.transitionLeft {
    animation-name: slideLeft;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-delay: .4s;
    animation-fill-mode: forwards;
}

.transitionRight {
    animation-name: slideRight;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-delay: .4s;
    animation-fill-mode: forwards;
}

@keyframes slideLeft {
    from {
        opacity: 0;
    }
    to {
        visibility: visible;
    }
}

@keyframes slideRight {
    from {
        opacity: 0;
    }
    to {
        visibility: visible;
    }
}
</style>