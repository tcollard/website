<template>
    <div class="progress">
        <span class='title text'>
            {{skill.name}}
        </span>
        <div class="bar" :id="skill.name + '-bar'">
            <div class="barBackground" :id="skill.name + '-back'">
                <div :id="skill.name + '-content'" class="coloredBar"></div>
            </div>
        </div>
        <span class="rate text">{{ percent }} %</span>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        skill: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            state: false,
            percentage: 0,
        }
    },
    computed: {
        percent() {
            return this.percentage;
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
            let elBar = document.getElementById(this.skill.name + '-bar');
            let elBack = document.getElementById(this.skill.name + '-back');
            let elContent = document.getElementById(this.skill.name + '-content');
            const scroll = window.scrollY || window.pageYOffset;
            const viewport = {
                top: scroll,
                bottom: scroll + window.innerHeight,
            }

            if (!this.state && elBar.offsetTop > viewport.top && elBar.offsetTop < viewport.bottom
                && elBar.offsetTop - viewport.top < window.innerHeight / 1.08) {
                this.state = !this.state;
                elContent.style.width = this.skill.rate + '%';
                elBack.style.width = '100%';
                elContent.classList.add('barTransition');
                elBack.classList.add('backTransition');
                let interval = setInterval(() => {
                    this.el = document.getElementById(this.skill.name + '-content');
                    if (this.percentage < this.skill.rate) {
                        this.percentage += 1;
                    } else {
                        clearInterval(interval);
                    }
                }, 20);

                return true;
            }
            return false;
        }
    }
}
</script>

<style scoped>
.progress {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.title {
    width: 25%;
    text-align: right;
}

.bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5%;
    width: 40%;
}
.coloredBar {
    align-self: flex-start;
    height: 10px;
}

.barTransition {
    animation-duration: 2s;
    animation-delay: .2s;
    animation-name: loadBar;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.backTransition {
    animation-duration: 1s;
    animation-name: loadBack;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    background-color: rgba(0, 0, 0, 0.3);
    align-self: left;
}

.rateTransition {
    animation-duration: 2s;
    animation-delay: .2s;
    animation-name: loadRate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes loadBar {
    from {
        opacity: 0;
        width: 0px;
    }
    to {
        background-color: orange;
    }
}

@keyframes loadBack {
    from {
        opacity: 0;
        width: 0px;
    }
}

@keyframes loadRate {
    from {
        content: "0%";
    }
    to {
        content: "100%";
    }
}

.rate {
    width: 25%;
    text-align: left;
    padding-left: 5%;
}

.barBackground {
    width: 100%;
}
</style>